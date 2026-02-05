var textt = prompt("This is a Javascript test: ");
var par = document.createElement("p");
var node = document.createTextNode("Javascript response test: " + textt);
par.appendChild(node);
var elem = document.getElementById("div1");
elem.appendChild(par);