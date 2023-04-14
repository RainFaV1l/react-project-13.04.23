import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu__link">
          <NavLink to={"/"}>Главная</NavLink>
        </li>
        <li className="menu__link">
          <NavLink to={"/services"}>Услуги</NavLink>
        </li>
        <li className="menu__link">
          <NavLink to={"/requests"}>Заявки</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
