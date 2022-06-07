import React from "react";
import Home from "./Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

function Pages() {
  const location = useLocation();
  console.log(location);
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/cook-recipe-app/" element={<Home />} />
        <Route path="/cook-recipe-app/cuisine/:type" element={<Cuisine />} />
        <Route
          path="/cook-recipe-app/searched/:search"
          element={<Searched />}
        />
        <Route path="/cook-recipe-app/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
