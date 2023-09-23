import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/Proyecto-4-Aplicacion-Restaurante/">La Perla del Pacífico - Restaurant</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/Proyecto-4-Aplicacion-Restaurante/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/Proyecto-4-Aplicacion-Restaurante/nosotros">Nosotros</Nav.Link>
                        <Nav.Link as={Link} to="/Proyecto-4-Aplicacion-Restaurante/plans">Nuestro Menu</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}