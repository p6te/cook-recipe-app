import { useEffect, useState } from "react";
import "../sass/cards.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";


function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    const checkJson = JSON.parse(check);

    if (check != null) {
      setPopular(checkJson);
      console.log("podmiana");
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));

      setPopular(data.recipes);
    }
  };

  return (
    <div>
      <div className="popular wrapper">
        <h3>Popular picks</h3>
        <Splide options={{ perPage: 4 }}>
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="popular card">
                  <p>{recipe.title}</p>
                  <div></div>
                  <img src={recipe.image} alt={recipe.title} />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
