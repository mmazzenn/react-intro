import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./Shared/Shared.css"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import NotFound from "./components/NotFound/NotFound";

function App() {
  let routes = createBrowserRouter([
    {path: "", element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: "home", element: <Home/>},
      {path: "about", element: <About/>},
      {path: "portfolio", element: <Portfolio/>},
      {path: "contact", element: <Contact/>},
      {path: "*", element: <NotFound/>}
    ]}
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
