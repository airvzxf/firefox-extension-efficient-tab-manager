// page-script.js

console.log("Iniciando...");

// add a new element to the DOM
let p = document.createElement("p");
p.textContent = "This paragraph was added by a page script.";
p.setAttribute("id", "page-script-para");
document.body.appendChild(p);

// define a new property on the window
window.foo = "This global variable was added by a page script";

// redefine the built-in window.confirm() function
window.confirm = function() {
    alert("The page script has also redefined 'confirm'");
}

console.log("Finalizando...");