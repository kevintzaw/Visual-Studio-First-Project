// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');
var div = document.getElementById('GFG_DIV');
up.innerHTML = "Click on button to remove the element.";

function GFG_Fun() {
    div.parentNode.removeChild(div);
    down.innerHTML = "Element is removed.";
}