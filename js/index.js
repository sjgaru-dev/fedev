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
