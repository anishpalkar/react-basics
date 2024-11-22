import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
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

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
