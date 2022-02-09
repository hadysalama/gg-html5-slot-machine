const cache = {};
const fortuna = require("javascript-fortuna");
fortuna.init();

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = require(`../assets/symbols/${name}.webp`);

      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
  }

  static get symbols() {
    return [
      "small_goggles",
      "small_goggles_purple",
      "king_ape",
      "small_logo",
      "ape_rawr",
      "pump_it",
      "up",
    ];
  }

  static random() {
    return this.symbols[Math.floor(fortuna.random() * this.symbols.length)];
  }
}
