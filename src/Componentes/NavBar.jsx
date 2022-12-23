import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom'

export const Navbareventos = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={'/'}>Eventos Deportivos</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/usuarios'}>Mostrar Usuarios</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/create'}>Crear Usuario</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Eventos" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/crearevento'}>Crear Evento</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/mostrareventos'}>Mostrar Eventos</NavDropdown.Item>
                
                <NavDropdown.Item href="#action/3.3">  </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Contactenos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet>

        </Outlet>

      </section>

    </>
  );

}

export default Navbareventos