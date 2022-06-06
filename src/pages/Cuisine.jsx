import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import "../sass/cuisine.scss";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  console.log(cuisine);

  return (
    <div className="cuisine">
      {cuisine.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
}
