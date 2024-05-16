import React from "react";
import ReactDOM from "react-dom/client";

// JSX Element => Babel transpiles => ReactElement => ReactElement(JS Object) => HTMLELement(render)

const Title = () => {
  return <h1 className="heading">Title</h1>;
};

//Component Composition = using component in another component
const HeadingComponent = () => (
  <div>
    <Title />
    <h1 className="heading">React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
