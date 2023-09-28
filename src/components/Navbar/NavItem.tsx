import { NavLink } from "react-router-dom";

export interface Item {
  label: string;
  icon: JSX.Element;
  to: string;
}

function NavItem({ item }: { item: Item }) {
  const { label, to, icon } = item;
  return (
    <NavLink to={to} className="flex justify-end m-2 py-2">
      <span className="mr-2 font-semibold">{label}</span>
      {icon}
    </NavLink>
  );
}

export default NavItem;
