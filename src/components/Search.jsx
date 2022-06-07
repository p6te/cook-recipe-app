import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import "../sass/search.scss";
import { ReactComponent as Logo } from "../logo.svg";

export default function Search() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/cook-recipe-app/searched/" + input);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <nav>
      <Link to="/cook-recipe-app">
        <Logo className="logo" />
      </Link>
      <form className="search" onSubmit={handleSubmit}>
        <FaSearch />
        <input type="text" value={input} onChange={handleInput} />
      </form>
    </nav>
  );
}
