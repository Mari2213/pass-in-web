import { Container, Image, Nav, Navbar } from "react-bootstrap";
import img from "../../assets/svgs/nlw-unite-icon.svg";
import Navlink from "../NavLink/Nav-Link.tsx";
const Header = () => {
  return (
    <Navbar className="p-3">
      <Container>
        <Image className="w-auto me-3" src={img} />
        <Nav className="me-auto">
          <Navlink href="/eventos">Eventos</Navlink>
          <Navlink href="/participantes">Participantes</Navlink>
          {/*<NavLink className="fw-medium lh-sm">Eventos</NavLink>*/}
          {/*<NavLink className="fw-medium lh-sm">Participantes</NavLink>*/}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
