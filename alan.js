const r = process.argv[2] * 1;

const alan = (r) => {
  let sonuc = Math.pow(r, 2) * 3.14;
  return `Yarıçapı ${r} olan dairenin alanı: ${sonuc}`;
};

console.log(alan(r));
