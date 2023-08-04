import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Перевірити ТТН</NavLink>
      <NavLink to="/departments">Список відділень</NavLink>
    </div>
  );
};

export default Navigation;
