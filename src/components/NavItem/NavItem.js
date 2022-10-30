import "./NavItem.css";

const NavItem = (props) => {
  return <li className="nav-Item">{props.children}</li>;
};

const NavItemDropDown = (props) => {
  return <li className="nav-Item dropdown">{props.children}</li>;
};

export default NavItem;
export { NavItemDropDown };
