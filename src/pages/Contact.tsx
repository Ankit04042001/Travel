import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './css/contact.css'

function Contact() {
  return (
    <div className='main-container contact'>
      <Background />
      <Header />
      <div className='main-container contact'>
        <div className='container'>
          <h1>Contact Us</h1>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Enter Your Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Write Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant='secondary' as='button' type='submit' className='w-100'>Submit</Button>
          </Form>

          <div className='other-contact'>
            <div className='phone'>
              <h2>Call Us</h2>
              <p><span aria-label='Mobile No.'><PhoneIcon /></span> +91-1234567890</p>
              <p><span aria-label='Mobile No.'><PhoneIcon /></span> +91-0123456789</p>
              <p><span aria-label='Mobile No.'><PhoneIcon /></span> +91-5647891230</p>
            </div>
            <div className='mail'>
              <h2>Mail Us</h2>
              <p><span aria-label='Email Id'><EmailIcon /></span> some@gmail.com</p>
              <p><span aria-label='Email Id'><EmailIcon /></span> some@email.com</p>
              <p><span aria-label='Email Id'><EmailIcon /></span> something@gmail.com</p>
            </div>
          </div>
        </div>

      </div>
      <Footer />

    </div>
  )
}

export default Contact