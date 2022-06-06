import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../sass/search.scss";
import { ReactComponent as Logo } from "../logo.svg";

export default function Search() {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/searched/" + input);
  };

  const handleInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  return (
    <nav>
      <Logo  className="logo"/>
      <form className="search" onSubmit={handleSubmit}>
        <FaSearch />
        <input type="text" value={input} onChange={handleInput} />
      </form>
    </nav>
  );
}
