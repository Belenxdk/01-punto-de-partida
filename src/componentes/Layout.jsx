import { NavLink, Outlet } from "react-router";
import Container, { Navbar } from "react-bootstrap";
import BarraNavegacion from "./BarraNavegacion";
import PiePagina from "./PiePagina";

export default function Layout() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="mb-3 rounded">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" end>Lo quieres, te lo vendo</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
                        <Nav.Link as={NavLink} to="/catalogo">Catálogo</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet />
            <hr />
            <small className="text-muted">Pie de página — siempre visible</small>
        </div>
    );
}

function Inicio()   { return <p>Portada.</p>; }
function Catalogo() { return <p>Grilla de productos.</p>; }

function Demo() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="catalogo" element={<Catalogo />} />
      </Route>
    </Routes>
  );
}