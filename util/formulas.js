module.exports = {
  add: (a, b, c) =>
    c != 0 ? (((b + c) / c + 0.5 * (a - 1)) / (b / c)) * a * b : b * a,
  addlower: (a, b, c) => b + c * (a + 1),
  decay: (a, b, c) => (c * a) / (c + b),
  decaylower: (a, b, c) => (b * (a + 1)) / (a + 1 + c) - (b * a) / (a + c),
  decaymulti: (a, b, c) => 1 + (a * b) / (a + c),
  decaymultilower: (a, b, c) => (b * (a + 1)) / (a + 1 + c) - (b * a) / (a + c),
  bigbase: (a, b, c) => b + c * a,
  bigbaselower: (a, b, c) => c,
  intervaladd: (a, b, c) => b + Math.floor(a / c),
  intervaladdlower: (a, b, c) =>
    Math.max(Math.floor((a + 1) / c), 0) - Math.max(Math.floor(a / c), 0),
  reduce: (a, b, c) => b - c * a,
  reducelower: (a, b, c) => b - c * (a + 1),
  log: (num) => Math.log(Math.max(num, 1)) / 2.303,
};
