import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import "../sass/category.scss";

export default function Category() {
  return (
    <div className="categories">
      <NavLink className="category" to="/cook-recipe-app/cuisine/italian">
        <FaPizzaSlice className="icon" />
        <h4>Italian</h4>
      </NavLink>
      <NavLink className="category" to="/cook-recipe-app/cuisine/american">
        <FaHamburger className="icon" />
        <h4>American</h4>
      </NavLink>
      <NavLink className="category" to="/cook-recipe-app/cuisine/thai">
        <GiNoodles className="icon" />
        <h4> Thai</h4>
      </NavLink>

      <NavLink className="category" to="/cook-recipe-app/cuisine/korean">
        <GiChopsticks className="icon" />
        <h4>Korean</h4>
      </NavLink>
    </div>
  );
}
