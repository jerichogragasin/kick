import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import '../../App.css';

const HomepageNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="/" className="navbrand">Kick</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link className="navlink rounded-2" href="/">Home</Nav.Link>
                        <Nav.Link className="navlink rounded-2" href="/login">Login</Nav.Link>
                        <Nav.Link className="navlink rounded-2" href="/signup">Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default HomepageNavbar;