import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4>
        </div>
      );
    });
  }

  return (
    <div className="search">
      {search.length === 0 ? <h3>There is no results...</h3> : <Results />}
    </div>
  );
}

export default Searched;
