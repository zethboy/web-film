import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return(
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>ZETHFLIX</Navbar.Brand>
          <Nav>
            <Nav.Link>TRENDING</Nav.Link>
            <Nav.Link>ANIME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigationbar;