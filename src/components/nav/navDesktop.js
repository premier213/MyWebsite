import { NavLink } from "react-router-dom";

const NavDesktop = () => (
  <div>
    <div className="xl:flex hidden">
      <ul className="flex text-gray-700">
        <NavLink to="/" activeClassName="text-red">
          <li className="pr-6">Home</li>
        </NavLink>
        <NavLink to="/about" activeClassName="text-red">
          <li className="pr-6">About</li>
        </NavLink>
        <NavLink to="/portfolio" activeClassName="text-red">
          <li className="pr-6">Portfolio</li>
        </NavLink>
        <NavLink to="/contact" activeClassName="text-red">
          <li className="pr-6">Contact</li>
        </NavLink>
      </ul>
    </div>
  </div>
);

export default NavDesktop;
