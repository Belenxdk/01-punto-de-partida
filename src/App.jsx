import { NavLink, Route, Routes } from "react-router";
import { Nav } from "react-bootstrap";
import Inicio from "./paginas/Inicio";
import Catalogo from "./paginas/Catalogo";
import Nosotros from "./paginas/Nosotros";
import Layout from "./componentes/Layout";


function Demo() {
  return (
    <div>
      <Nav variante="tabs" className="mb-3">
        <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
        <Nav.Link as={NavLink} to="/catalogo" >Catálogo</Nav.Link>
        <Nav.Link as={NavLink} to="/nosotros" >Nosotros</Nav.Link>
      </Nav>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalog" element={<Catalogo />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Route>
      </Routes>



    </div>

  );
}