// function main() {
//   function abc(result) {
//     alert(result);
//   }

//   function computer(a, b, fn) {
//     let result = a + b;

//     setTimeout(() => {
//       fn(result);
//     }, 2000);
//   }

//   computer(10, 10, abc);

//   alert('finish')
// }

// document.addEventListener("DOMContentLoaded", main);

//2

// function btn(lable, classList) {
//   if (classList === undefined) {
//     return `<button class="btn prymary">${lable}</button>`;
//   } else {
//     return `<button class="btn ${classList}">${lable}</button>`;
//   }
// }

// function main() {
//   const btnGroup = document.querySelector(".btn-group");

//   btnGroup.innerHTML = btn("Delete", "red") + " " + btn("Save");

//   // btnGroup.innerHTML = `
//   //   <button class="btn red">Delete</button>
//   //   <button class="btn primary">Save</button>
//   // `;
// }

// document.addEventListener("DOMContentLoaded", main);

//3

// class Button {
//   constructor(lable, classList) {
//     this.lable = lable;
//     this.classList = ["btn"];
//   }

//   render() {
//     return `<button class="btn ${this.classList}">${this.lable}</button>`;
//   }
// }
// function main() {
//   const btnGroup = document.querySelector(".btn-group");

//   const btnDelete = new Button("Delete");
//   const btnSave = new Button("Save");

//   btnGroup.innerHTML = btnDelete.render() + btnSave.render();
//   btnGroup.innerHTML = button("Delete", "red") + button("Save");
// }

// document.addEventListener("DOMContentLoaded", main);

// 4

function main() {
  const p = new Promise((resolve, done) => {
    setTimeout(() => {
      resolve("done");
    }, 2000);
  });

  p.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

document.addEventListener("DOMContentLoaded", main);
