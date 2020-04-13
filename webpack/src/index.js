// console.log('hello webpack');
// import { add } from "./other"
// const json = require("./index.json")

// console.log(add(1, 2), json);

import pic from "./logo.png";
// import("./index.css");
// import("./a.css");
import("./index.less");


let img = new Image();
img.src = pic;

let root = document.getElementById("root");
root.append(img);