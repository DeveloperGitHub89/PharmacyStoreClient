import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export function NavigationBar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Pharmacy Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/medicines-list'>
                            <Nav.Link>Medicines List</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/my-orders'>
                            <Nav.Link>My Orders</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/add-medicine'>
                            <Nav.Link>Add Medicine</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}