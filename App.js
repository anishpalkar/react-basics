import React from "react";
import ReactDOM from "react-dom/client";

// JSX Element => Babel transpiles => ReactElement => ReactElement(JS Object) => HTMLELement(render)

const heading = <h1 id="heading">React from JSX</h1>;

//React Functional Component
const HeadingComponent = () => (
  <div>
    <h1 className="heading">React Functional Component</h1>
  </div>
);
//No need to write return in the above function and we have parenthesis, below is another way of writing  same code
/*
const HeadingComponent = () => {
  return <h1 className="heading">React Functional Component</h1>
};
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
