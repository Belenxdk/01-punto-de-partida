import { NavLink } from "react-router";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function BarraNavegacion() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mb-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Lo quieres, te lo vendo
        </Navbar.Brand>

        <Nav>
          <Nav.Link as={NavLink} to="/" end>
            Inicio
          </Nav.Link>

          <Nav.Link as={NavLink} to="/catalogo">
            Catálogo
          </Nav.Link>

          <Nav.Link as={NavLink} to="/nosotros">
            Nosotros
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
