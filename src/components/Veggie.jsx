import React from "react";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../sass/cards.scss";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);



  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    const checkJson = JSON.parse(check);

    if (check != null) {
      setVeggie(checkJson);
      console.log("podmiana");
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));

      setVeggie(data.recipes);
      console.log("wstawienie");
    }
  };

  useEffect(() => {
    getVeggie();
  }, []);

  return (
    <div>
      <div className="veggie wrapper">
        <h3>Veggie picks</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            breakpoints: 640,
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="veggie card">
                  <Link to={"/cook-recipe-app/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <div></div>
                    <img src={recipe.image} alt={recipe.title} />
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Veggie;
