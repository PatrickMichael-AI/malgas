import './Contact.css'

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <p>Fill out the form below to make a reservation or send us a message. We will get back to you as soon as possible.</p>

      <div className="contact-form">
        <form>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <input type="text" placeholder="Phone" />
          </div>
          <div>
            <input type="text" placeholder="Date" />
          </div>
          <div>
            <input type="text" placeholder="Time" />
          </div>
          <div>
            <input type="text" placeholder="Number of Guests" />
          </div>
          <div>
            <textarea placeholder="Special requests or message"></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      <h2>Other Ways to Reach Us</h2>
      <p>Phone: (217) 555-0123</p>
      <p>Email: info@oakandbarrel.com</p>
      <p>Address: 123 Main Street, Springfield, IL 62701</p>

      <h2>Hours of Operation</h2>
      <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
      <p>Sunday: 12:00 PM - 8:00 PM</p>
    </div>
  )
}

export default Contact
