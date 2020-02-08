import { useState } from "react";
import { Form, Col, InputGroup, Button } from "react-bootstrap";
import "../styles/form.css";

function Contact(props) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
  };

  let content = (
    <div className="form-container">
      <div>
        <h4>Questions or comments? We would love to hear from you!</h4>
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Group>
          <Form.Label>Reason</Form.Label>
          <Form.Check
            required
            type="radio"
            label="Comment"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            required
            type="radio"
            label="Concern"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
          <Form.Check
            required
            type="radio"
            label="Product Request"
            name="formHorizontalRadios"
            id="formHorizontalRadios3"
          />
          <Form.Check
            required
            type="radio"
            label="Other"
            name="formHorizontalRadios"
            id="formHorizontalRadios4"
          />
        </Form.Group>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );

  return content;
}

export default Contact;
