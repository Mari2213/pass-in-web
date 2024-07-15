import { NavLink } from "react-bootstrap";
import { ComponentProps } from "react";

interface NavlinkProps extends ComponentProps<"a"> {
  children: string;
}

const Navlink = (props: NavlinkProps) => {
  return (
    <>
      <NavLink {...props} className="fw-medium lh-sm">
        {props.children}
      </NavLink>
    </>
  );
};

export default Navlink;
