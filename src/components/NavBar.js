import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
//import { NavDropdownProps } from 'react-bootstrap';
import '../components/NavBar.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
            <div>  
            <Navbar expand ="lg" className="bg-body-tertiary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Keingtobin</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='me=auto'>
                            <Nav.Link as={Link}to="/projects">Projects</Nav.Link>
                            <Nav.Link as={Link}to="/education" >Education</Nav.Link>
                            <Nav.Link as={Link}to="/chatbot">Chatbot</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </div>
    )
}