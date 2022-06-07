import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import "../sass/home.scss";
import {motion} from "framer-motion";



function Home() {
  return (
    <motion.div className="home"
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exited={{opacity: 0}}
    transition={{duration: 0.5}}
    >
      <Veggie className="veggie" />
      <Popular className="popular" />
    </motion.div>
  );
}

export default Home;
