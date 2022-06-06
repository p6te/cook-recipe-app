import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "../sass/category.scss";

export default function Category() {
  return (
    <div className="categories">
      <NavLink className="category" to="/cuisine/italian">
        <FaPizzaSlice className="icon" />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="category" to="/cuisine/american">
        <FaHamburger className="icon" />
        <h4>American</h4>
      </NavLink>
      <NavLink className="category" to="/cuisine/thai">
        <GiNoodles className="icon" />
        <h4> Thai</h4>
      </NavLink>

      <NavLink className="category" to="/cuisine/japanese">
        <GiChopsticks className="icon" />
        <h4>Japanese</h4>
      </NavLink>
    </div>
  );
}
