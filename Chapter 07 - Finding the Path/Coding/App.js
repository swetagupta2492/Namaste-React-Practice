// ## Namaste React Course by Akshay Saini
// Chapter 05 - Let's get Hooked!

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// AppLayout component to render: Header, Body and Footer Component
const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    errorElement: <Error/>
  },
  {
    path: "/aboutUs",
    element: <AboutUs/>
  },
  {
    path: "/contactUs",
    element: <ContactUs/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
