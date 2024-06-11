// 1 //
console.log("Start");

function app() {
  const btnSave = document.querySelector("#btnSave");
  const message = document.querySelector(".message");

  function onSave() {
    console.log("clicked!");
    message.innerText = "SAVED!";
    setTimeout(() => {
      message.innerText = "";
    }, 1000);
  }

  btnSave.addEventListener("click", onSave);
}

document.addEventListener("DOMContentLoaded", app);

// 2 //

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = () => this.name;
}

class Man {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("John", 30);
console.log(p);
console.log(p.getName());

const p1 = new Man("abc", 24);
console.log(p1);

// 3 //

function myKey() {
  let a = 10;
  function add10() {
    a += 10;
    return a;
  }
  function min10() {
    a -= 10;
    return a;
  }

  return {
    add10: add10,
    min10: min10,
  };
}

const key = myKey();
console.log(key.min10());
console.log(key.add10());
console.log(key.add10());
console.log(key.min10());
