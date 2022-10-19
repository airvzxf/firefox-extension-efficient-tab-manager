// content-script.js

// can access and modify the DOM
let pageScriptPara = document.getElementById("page-script-para");
pageScriptPara.style.backgroundColor = "blue";

// can't see properties added by page-script.js
console.log(window.foo);  // undefined

// sees the original form of redefined properties
window.confirm("Are you sure?"); // calls the original window.confirm()
