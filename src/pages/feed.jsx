import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Card,
  Row,
} from "react-bootstrap";

export default function Feed() {
  const event_list = JSON.parse(localStorage.getItem("events")) || [];
  const event_table = event_list.map((event_single) => (
    // <Stack className="mb-3" gap={3}>
    //   <h1 key={event_single.name}>{event_single.name}</h1>
    //   <p key={event_single.date}>{event_single.date}</p>
    //   <p key={event_single.time}>{event_single.time}</p>
    //   <p key={event_single.location}>{event_single.location}</p>
    //   <p key={event_single.description}>{event_single.description}</p>
    // </Stack>
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{event_single.name}</Card.Title>
        <Card.Text>Date: {event_single.date}</Card.Text>
        <Card.Text>Time: {event_single.time}</Card.Text>
        <Card.Text>Location: {event_single.location}</Card.Text>
        <Card.Text>Description: {event_single.description}</Card.Text>
      </Card.Body>
    </Card>
  ));
  // console.log(event_table);

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
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Container fluid>
          <h1>Feed</h1>
          <Row md="auto" className="justify-content-md-center">
            {event_table}
          </Row>
        </Container>
      </div>
    </div>
  );
}
