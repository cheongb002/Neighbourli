import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function CreateEvent() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // record event to local storage
    const event_dict = {
      name: form.EventName.value,
      date: form.EventDate.value,
      time: form.EventTime.value,
      location: form.EventLocation.value,
      description: form.EventDescription.value,
    };
    const event_list = JSON.parse(localStorage.getItem("events")) || [];
    // append event to local storage
    event_list.push(event_dict);

    localStorage.setItem("events", JSON.stringify(event_list));

    // redirect to event page
  };
  return (
    <div className="App">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Form.Group className="mb-3" controlId="EventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Name" />
              </Form.Group>
            </Col>
            <Col md="auto">
              <Form.Group controlId="EventDate">
                <Form.Label>Event Date</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Date" />
              </Form.Group>
            </Col>
            <Col md="auto">
              <Form.Group controlId="EventTime">
                <Form.Label>Event Time</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Time" />
              </Form.Group>
            </Col>
            <Col md="auto">
              <Form.Group controlId="EventLocation">
                <Form.Label>Event Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Event Location" />
              </Form.Group>
            </Col>

            <Form.Group className="mb-3" controlId="EventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Event Description"
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
