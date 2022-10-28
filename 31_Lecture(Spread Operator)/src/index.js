import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

let citrus = ["lime", "lemon", "orange"];
let fruits = ["Apple", ...citrus, "Banana", "Coconut"];

// Spread Operator

console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond"
};

const user = {
  ...fullName,
  id: 1,
  username: "JamesBond007"
};

console.log(user);

ReactDOM.render(<App />, document.getElementById("root"));
