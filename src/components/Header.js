import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">FASTECH</Navbar.Brand>
          <Nav className="me-auto"  style={{marginLeft: '300px'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#myprofile">My Profile </Nav.Link>
            <Nav.Link href="#activity">Activity</Nav.Link>
            <Nav.Link href="#howitworks">How it Works</Nav.Link>
            <Button variant="outline-success" style={{marginLeft: '240px'}}>Create</Button>
            <Button variant="outline-success" style={{marginLeft: '5px'}}>Sign in</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;