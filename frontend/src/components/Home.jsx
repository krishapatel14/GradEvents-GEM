import React from 'react'
import "../assets/css/style.css"
import "../assets/vendor/bootstrap/css/bootstrap.min.css"
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css"
import "../assets/vendor/boxicons/css/boxicons.min.css"
import "../assets/vendor/glightbox/css/glightbox.min.css"
import "../assets/vendor/remixicon/remixicon.css"
import "../assets/vendor/swiper/swiper-bundle.min.css"
import techquiz from '../assets/img/tech-quiz.jpg'
import seminar  from '../assets/img/seminar.jpg'
import logodesign from '../assets/img/logo-design.jpg'
import logo from '../assets/img/GradEvents-logos_white.png';
// import seminar2 from  '../assets/img/portfolio/seminar2.jpg';
// import hackathon from '../assets/img/portfolio/hackathon.jpg'



export const Home = () => {
  return (
    <>
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="/">
              GradEvents
            </a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="nav-link   scrollto" href="#portfolio">
                  Upcoming Events
                </a>
              </li>

              <li className="dropdown">
                <a href="#">
                  <span>SearchBy</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li>
                    <a href="#">CollegeList</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Event Type</span>{" "}
                      <i className="bi bi-chevron-right" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          Seminar/Workshop
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Technical
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Cultural
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Non-Technical
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Others
                        </a>
                      </li>
                    </ul>
                  </li>


                </ul>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="getstarted scrollto" href="/login">
                  Login
                </a>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h1>Welcome to our Website</h1>
              <h2>
                We are here to make your college life memorable.
              </h2>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <a href="/signup" className="btn-get-started scrollto">
                  Signup
                </a>
              </div>
              

            </div>
            <div className='logo-image'>
                <img src={logo} alt="" />
              </div> 
          </div>
          
        </div>
      </section>
      {/* End Hero */}
      <main id="main">

        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6">
                <p>
                  It is an online platform for Events organized by colleges and universities affiliated by GTU.
                  We are a group of passionate developers and designers who have come together to create an online platform that allows students to easily register.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" />One stop platform for registering into an event
                  </li>
                  <li>
                    <i className="ri-check-double-line" />All kinds of event are there
                  </li>
                  <li>
                    <i className="ri-check-double-line" />All events are organized by GTU affiliated colleges and universities
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0">
                <p>
                Lets get started with registering into thrilling event throug us and make dure to learn something new everyday with people we trust and who trust us
                </p>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}


        {/* ======= Cta Section ======= */}
        <section id="cta" className="cta">
          <div className="container" data-aos="zoom-in">
            <div className="row">
              <div className="col-lg-9 text-center text-lg-start">
                <h3>Get Yourself Register Here</h3>
                <p>
                  Get yourself register in the best events and make better version of yourself with us!! We have the events that will make the memories in which some are happy and some are sad but at the end we are together in this world of enthusiasm.
                </p>
              </div>
              <div className="col-lg-3 cta-btn-container text-center">
                <a className="cta-btn align-middle" href="/events">
                  Register
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End Cta Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Upcoming Events</h2>
              <p>
                Thriling events are at your doorstep..Get yourself imersed  in the world of events.
              </p>
            </div>


            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src=
                    {techquiz}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    src=
                    {seminar}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  <img
                    src={logodesign}
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-3.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  {/* <img
                    src=
                    {seminar2}
                    className="img-fluid"
                    alt=""
                  /> */}
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Card 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  {/* <img
                    src={hackathon}
                    className="img-fluid"
                    alt=""
                  /> */}
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-5.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Web 2"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-img">
                  {/* <img
                    src={portfolio6}
                    className="img-fluid"
                    alt=""
                  /> */}
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-6.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="App 3"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="portfolio-info">


                  <a
                    href="assets/img/portfolio/portfolio-7.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox preview-link"
                    title="Card 1"
                  >
                    <i className="bx bx-plus" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="details-link"
                    title="More Details"
                  >
                    <i className="bx bx-link" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>


              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-img">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>

              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}




        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
                If you have any query regarding to anything then contact us. We will be happy to assist you.
                <br />
                <br />
              <a href="">gradevents@query.com</a>                
              </p>
            </div>

          </div>
        </section>
        {/* End Contact Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id="footer">
        <div className="footer-newsletter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Give us Feedback</h4>
                <p>
                  your feedback plays important role for us and our Website
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" /> <a href="#portfolio">Upcoming Events</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#">
                      SearchBy
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <a href="#contact">
                      contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links" >
                <h4>Our Social Networks</h4>
                <p>
                  This are some sides of us which is useful for you
                </p>
                <div className="social-links mt-3">
                  <a href="#" className="twitter">
                    <i className="bx bxl-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bx bxl-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bx bxl-instagram" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bx bxl-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            © Copyright{" "}
            <strong>
              <span>Grad Events</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
    </>


  )
}
