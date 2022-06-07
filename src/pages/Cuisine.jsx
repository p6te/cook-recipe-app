import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import "../sass/recipes.scss";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  useEffect(() => {
    const getCuisine = async (name) => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
      );

      const recipes = await data.json();
      setCuisine(recipes.results);
    };

    getCuisine(params.type);
  }, [params.type]);

  function Results() {
    return cuisine.map((item) => {
      return (
        <div className="card" key={item.id}>
          <Link to={"/cook-recipe-app/recipe/" + item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </div>
      );
    });
  }

  return (
    <motion.div
      className="recipes"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exited={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Results />
    </motion.div>
  );
}
