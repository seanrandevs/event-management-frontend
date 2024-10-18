import { Form, Button } from 'react-bootstrap';
import Navbar from './Nav_bar';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="user_email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} required />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
        </Form>
     <Footer />
    </div>
  )
}

export default ContactPage