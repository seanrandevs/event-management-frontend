import { Form, Button } from 'react-bootstrap';
import { FaPhoneSquareAlt, FaEnvelope, FaRegCommentDots  } from "react-icons/fa";
import Navbar from './Nav_bar';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact">
        <h1>Contact Us</h1>
          <div className="contacts">
            <div className="phone">
              <FaPhoneSquareAlt className="icons" />
              <h6>By Phone</h6>
              <div>3893786255</div>
            </div>
            <div className="email">
              <FaEnvelope className="icons" />
              <h6>By Email</h6>
              <div>eventsnap@gmail.com</div>
            </div>
            <div className="mailbox">
              <FaRegCommentDots className="icons" />
              <h6>By Mail</h6>
              <div>313 first street 
              <div>New York City, NY 88909</div>
              </div>
            </div>
          </div>
      </div>
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