import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "../sass/search.scss";

export default function Search() {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleInput = (e) => {
    e.preventDefault();
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <FaSearch />
      <input type="text" value={input} onChange={handleInput} />
    </form>
  );
}
