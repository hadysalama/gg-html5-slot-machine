import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = [
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
    ];

    this.nextSymbols = [
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
      ["small_goggles_purple", "small_goggles_purple", "small_goggles_purple"],
    ];

    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    this.autoPlayCheckbox = document.getElementById("autoplay");

    this.wager = document.getElementById("wager");

    this.jackpot = document.getElementById("jp").innerHTML;

    if (config.inverted) {
      this.container.classList.add("inverted");
    }

    this.config = config;
  }

  spin() {
    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
    ];

    this.onSpinStart(this.nextSymbols);

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd(this.nextSymbols));
  }

  onSpinStart(symbols) {
    this.spinButton.disabled = true;
    this.wager.disabled = true;

    if (
      parseFloat(this.wager.value) < 0.1 ||
      isNaN(parseFloat(this.wager.value))
    ) {
      alert("Wager must be at least 0.1 GG.");
      this.spinButton.disabled = false;
      this.wager.disabled = false;
      throw new Error("Wager must be at least 0.1 GG.");
    }

    this.jackpot = parseFloat(this.jackpot) + parseFloat(this.wager.value);
    document.getElementById("jp").innerHTML = this.jackpot;

    this.config.onSpinStart?.(symbols);
  }

  onSpinEnd(symbols) {
    this.spinButton.disabled = false;
    this.wager.disabled = false;

    this.config.onSpinEnd?.(symbols);

    if (this.autoPlayCheckbox.checked) {
      return window.setTimeout(() => this.spin(), 200);
    }
  }
}
