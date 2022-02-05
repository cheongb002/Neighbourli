import { Figure } from "react-bootstrap";
import {Navbar, Container, NavDropdown, Nav} from "react-bootstrap";


function Homepage() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    // event.stopPropagation();
    const form = event.currentTarget;
    console.log(form.ControlInput1.value);
    localStorage.setItem("whateverIWant", form.ControlInput1.value);
  };
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/feed">Feed</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
                
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
        {/* <p>
            This is the homepage of our website. To see our feed, go <a href="/feed">here.</a> To see our login, go <a href="/">here.</a>
        </p>
        <p>
            Lorem Ipsum.
        </p> */}

        {/* <div class="container2"> */}

        <div class="myDiv">
            <p>This is the homepage of our website.</p>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="dota"
                    src="dota.png"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        {/* </div> */}
    </div>

  );
}

export default Homepage;
