import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return(
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>ZETHFLIX</Navbar.Brand>
          <Nav>
            <Nav.Link href="#top">TRENDING</Nav.Link>
            <Nav.Link href="#anime">ANIME</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navigationbar;