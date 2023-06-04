import React from "react";
// import {Navbar } from "./pages/navbar";
import { ShowApp } from "./pages/cocktail/Index";
import { ShowCase } from "./pages/review/Index";
import { Apex } from "./pages/tour"; 
import {NewApp } from './pages/cart/Index'
function App() {
  return (
    <>
      <ShowApp/>
      <NewApp/>
      <ShowCase/>
      <Apex/>
    </>
  );
}
export default App;
