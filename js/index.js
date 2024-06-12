function main() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // function makeLi(list) {
  //   const output = [];
  //   let i = 0;
  //   while (i < list.length) {
  //     output.push(`<li>${list[i]}</li>`);
  //     i++;
  //   }

  //   for (i = 0; i < list.length; i++) {
  //     output.push(`<li>${list[i]}</li>`);
  //   }
  //   return output;
  // }
  // const result = makeLi(numbers);

  // function makeP(list) {
  //   return list.map((item) => `<p>${item}</p>`);
  // }

  const makeP = (list) => list.map((item) => `<p>${item}</p>`);

  console.log(makeP(numbers));

  // console.log(result);
}

document.addEventListener("DOMContentLoaded", main);
