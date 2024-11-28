var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function () {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  //   if (username && password) {
  //     dialog.showModal();
  //   }
};

if (username === "apgan" && password === "pass123") {
  dialog.showModal();
}

document.querySelector(".IYA-btn").onclick = function () {
  dialog.close();
  window.location.href = "galery.html";
};

document.querySelector("#tidak-btn").onclick = function () {
  dialog.close();
  alert("anda tidak login");
};

var ulangi = confirm("Apakah anda mau mengulang?");
var counter = 0;

while (ulangi) {
  var jawab = confirm("Apakah anda mau mengulang?");
  counter++;
  if (jawab == false) {
    ulangi = false;
  }
}

document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");
