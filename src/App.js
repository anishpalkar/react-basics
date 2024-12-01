import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

// what should we give in path ./components/Header or ./components/Header.jsx? It doesn't matter, react treats it as a js file only

// JSX Element => Babel transpiles => ReactElement => ReactElement(JS Object) => HTMLELement(render)

//Chunking = Code Splitting = Dynamic Bundling = Lazy Loading = on demand loading are same concepts just different names; its to break down app into smaller logical chunks
const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));
//when we use lazy() and import Grocery component, React is going make network call to fetch its chunk when we click on grocery. So there is network call made to get this Grocery bundle chunk, meanwhile react needs to be informed by wrapping component in <Suspense>. If we do not wrap in <Suspense> we get Error saying that our component rendering is suspended and app goes on Error page. Why did react suspend rendering is because react tries to render Grocery component immediately after click and its not able to do it since its not available so react suspends rendering of this component, and it takes few millli secs to make network call and get Grocery chunk in browser. Hence, we give a fallback in Suspense <Suspense fallback={jsx}> which tells react render this fallback till the time we get Grocery chunk imported in browser and make it available. Once its available react stops rendering fallback and renders the Grocery component. Once we have imported we don't re import its just imported once and we can use it again till we re-load the page.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />

      <Outlet />
      {/*
      Outlet will take care of loading the correct children of AppLayout. Outlet gets replaced by the Children Component according to the path in URL.
       if path = /
      <Body />

      if path = /about 
      <About />
      
      if path = /contact
      <Contact /> */}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
