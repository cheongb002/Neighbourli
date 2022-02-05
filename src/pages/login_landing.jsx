import { Button, Form } from "react-bootstrap";
import { Figure } from "react-bootstrap";
import {Navbar, Container, NavDropdown, Nav} from "react-bootstrap";

function Login() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    const form = event.currentTarget;
    console.log(form.ControlInput1.value);
    localStorage.setItem("whateverIWant", form.ControlInput1.value);
  };
  return (
    <div className="App">
      {localStorage.getItem("whateverIWant")}

      <Navbar expand="lg" class = "navbar">
        <Container  class = "navcon">
            <Navbar.Brand href="#home">Neighbourli</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/feed">Feed</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/create_event">Create Event</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
