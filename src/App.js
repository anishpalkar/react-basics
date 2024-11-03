import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// what should we give in path ./components/Header or ./components/Header.jsx? It doesn't matter, react treats it as a js file only

// JSX Element => Babel transpiles => ReactElement => ReactElement(JS Object) => HTMLELement(render)

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
