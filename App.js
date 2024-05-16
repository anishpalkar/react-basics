import React from "react";
import ReactDOM from "react-dom/client";

// JSX Element => Babel transpiles => ReactElement => ReactElement(JS Object) => HTMLELement(render)

const heading = <h1 id="heading">React from JSX</h1>;

console.log(heading); // this is an object which is created by React.createElement.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
// object is passed to render function. Render function will convert it into html element form and put it inside root div which is understood by browser(HTML).
