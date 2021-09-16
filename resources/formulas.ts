type num = number;
const formulas = {
  add: (b: num, c: num, e: num): num =>
    c != 0 ? (((b + c) / c + 0.5 * (e - 1)) / (b / c)) * e * b : b * e,
  addlower: (b: num, c: num, e: num): num => b + c * (e + 1),
  decay: (b: num, c: num, e: num): num => (b * e) / (e + c),
  decaylower: (b: num, c: num, e: num): num =>
    (b * (e + 1)) / (e + 1 + c) - (b * e) / (e + c),
  decaymulti: (b: num, c: num, e: num): num => 1 + (e * b) / (e + c),
  decaymultilower: (b: num, c: num, e: num): num =>
    (b * (e + 1)) / (e + 1 + c) - (b * e) / (e + c),
  bigbase: (b: num, c: num, e: num): num => b + c * e,
  bigbaselower: (b: num, c: num, e: num): num => c,
  intervaladd: (b: num, c: num, e: num): num => b + Math.floor(e / c),
  intervaladdlower: (b: num, c: num, e: num): num =>
    Math.max(Math.floor((e + 1) / c), 0) - Math.max(Math.floor(e / c), 0),
  reduce: (b: num, c: num, e: num): num => b - c * e,
  reducelower: (b: num, c: num, e: num): num => b - c * (e + 1),
  log: (num: num): num => Math.log(Math.max(num, 1)) / 2.303,
};

export { formulas };