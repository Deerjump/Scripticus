module.exports = {
  add: (b, c, e) =>
    c != 0 ? (((b + c) / c + 0.5 * (e - 1)) / (b / c)) * e * b : b * e,
  addlower: (b, c, e) => b + c * (e + 1),
  decay: (b, c, e) => (b * e) / (e + c),
  decaylower: (b, c, e) => (b * (e + 1)) / (e + 1 + c) - (b * e) / (e + c),
  decaymulti: (b, c, e) => 1 + (e * b) / (e + c),
  decaymultilower: (b, c, e) => (b * (e + 1)) / (e + 1 + c) - (b * e) / (e + c),
  bigbase: (b, c, e) => b + c * e,
  bigbaselower: (b, c, e) => c,
  intervaladd: (b, c, e) => b + Math.floor(e / c),
  intervaladdlower: (b, c, e) =>
    Math.max(Math.floor((e + 1) / c), 0) - Math.max(Math.floor(e / c), 0),
  reduce: (b, c, e) => b - c * e,
  reducelower: (b, c, e) => b - c * (e + 1),
  log: (num) => Math.log(Math.max(num, 1)) / 2.303,
};
