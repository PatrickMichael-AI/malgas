import './Home.css'

function Home() {
  return (
    <div>
      <img src="/images/hero-steak.jpg" alt="Steak" className="hero-image" />

      <h1>Welcome to The Oak and Barrel</h1>

      <p className="description">
        The Oak and Barrel is a family-owned restaurant located in the heart of Springfield, Illinois. We have been serving the community since 2010 with a diverse menu that features everything from hand-cut steaks and fresh sushi to gourmet burgers and craft beers. Our restaurant started as a small 30-seat establishment and has grown over the years to accommodate 150 guests. We take pride in sourcing the finest ingredients from local farms and suppliers to ensure that every dish we serve meets the highest standards of quality and flavor. Whether you are joining us for a casual weeknight dinner, a special celebration, or just stopping by for a cold craft beer after work, we welcome you to experience the warm and inviting atmosphere that has made The Oak and Barrel a Springfield favorite for over a decade. Our dedicated team of chefs and staff work tirelessly to provide you with an exceptional dining experience every single time you walk through our doors.
      </p>

      <div className="image-row">
        <img src="/images/sushi-plate.jpg" alt="Sushi" />
        <img src="/images/burger.jpg" alt="Burger" />
        <img src="/images/craft-beer.jpg" alt="Craft Beer" />
      </div>

      <h2>Hours of Operation</h2>
      <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
      <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
      <p>Sunday: 12:00 PM - 8:00 PM</p>

      <h2>Location</h2>
      <p>123 Main Street, Springfield, IL 62701</p>
      <p>Phone: (217) 555-0123</p>
    </div>
  )
}

export default Home
