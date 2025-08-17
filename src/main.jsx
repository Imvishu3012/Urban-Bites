import { Children, StrictMode } from "react";
import { lazy,Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartShow from "./components/CartShow.jsx";
import RestaurantMenu from "./components/RestaurantMenu.jsx";
import Body from "./components/Body.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import ErrorPage from "./ErrorPage.jsx";
// import Grocery from "./components/Grocery.jsx";

const Grocery = lazy(()=>import("./components/Grocery.jsx"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Body />,
      },

      { 
        path: "about", 
        element: <About /> 
      },

      {   
        path: "grocery", 
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> 
      },

      {
        path: "contact",
        element: <Contact />,
      },{path : "cart",
        element: <CartShow/>

      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
