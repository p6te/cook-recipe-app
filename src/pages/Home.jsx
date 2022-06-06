import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import "../sass/home.scss"

function Home() {
  return (
    <div className="home">
      <Veggie className="veggie" />
      <Popular className="popular" />
    </div>
  );
}

export default Home;
