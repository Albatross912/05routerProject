import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import {
  Home,
  Contact,
  Header,
  Footer,
  About,
  Layout,
  User,
} from "./components/index";
import Github, { githubInfoLoader } from "./components/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path="user/:userid" element={<User/>}></Route>
      <Route
      loader={githubInfoLoader} 
      path="github" element={<Github></Github>}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
