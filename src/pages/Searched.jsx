import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../sass/recipes.scss";

function Searched() {
  const [search, setSearch] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const recipes = await data.json();

    setSearch(recipes.results);

    console.log(search);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  function Results() {
    return search.map((item) => {
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
      exited={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {search.length === 0 ? <h3>There is no results...</h3> : <Results />}
    </motion.div>
  );
}

export default Searched;
