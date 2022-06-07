import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {motion} from "framer-motion";

import "../sass/recipe.scss";

export default function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instruction");

  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
    };

    fetchDetails();
  }, [params.name]);

  console.log(details);

  function ShowIngredients() {
    return (
      <>
        <ul>
          {details.extendedIngredients.map((ingridient) => {
            return <li key={ingridient.id}>{ingridient.original}</li>;
          })}
        </ul>
      </>
    );
  }

  return (
    <motion.div
      className="details-recipe"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exited={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="show">
        <h2>{details.title}</h2>
        <div className="buttons">
          <button
            className={activeTab === "instruction" ? "active" : ""}
            onClick={() => setActiveTab("instruction")}
          >
            Instructions
          </button>
          <button
            className={activeTab === "ingridients" ? "active" : ""}
            onClick={() => setActiveTab("ingridients")}
          >
            Ingredients
          </button>
        </div>
      </div>

      <div className="info-container">
        <div className="left-side">
          <img src={details.image} alt={details.title} />
        </div>

        <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
      </div>

      <div className="instru">
        {activeTab === "ingridients" && <ShowIngredients />}

        {activeTab === "instruction" && (
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        )}
      </div>
    </motion.div>
  );
}
