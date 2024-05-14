import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello World from React!!"
);

console.log(heading); // this is an object which is created by React.createElement.

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(heading); 
// object is passed to render function. Render function will convert it into html element form and put it inside root div which is understood by browser(HTML).


// Structure example

/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>

ReactElement(Object) => HTML(Browser understands), the conversion is done by render().
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++
// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     [React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]),
//     React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")])
//     ]);

// root.render(parent);


// This is the core of react, at its core React creates objects using createElement(). But this is so cumbersome to write, and jsx will make life easy for us. 
