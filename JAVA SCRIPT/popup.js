var yakin = confirm("maukah kamu tulis nama mu?");
if (yakin) {
} else {
  document.write("Baiklah, tetap di sini saja ya :)");
}
var nama = prompt(" nama kamu?", "");
alert("Selamat datang di tutorial Javascript");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");
document.write("<p>Hello " + nama + "</p>");

while (ulangi) {
  var jawab = confirm("Apakah anda mau mengulang?");
  counter++;
  if (jawab == false) {
    ulangi = false;
  }
}

document.write("Perulangan sudah dilakukan sebanyak " + counter + " kali");
