import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from 'react-bootstrap/Card';
import './css/about.css'
import Ronaldo from '../images/ronaldo.jpg';
import BillGates from '../images/billGates.jpg';
import Downey from '../images/Downey.jpg';

function About() {
  return (
    <div>
      <Background />
      <Header />
      <div className='container'>
      <h1 className='about-heading'>What We Are?</h1>
      <p className='description'>
        Welcome to Timeless Journeys, where the past, the sacred, the thrilling,
        and the awe-inspiring converge into extraordinary travel experiences.
        As connoisseurs of exploration, we invite you to embark on a voyage through
        time, weaving through the tapestry of history, religion, adventure, and
        nature's wonders. Step into the footsteps of ancient civilizations as you
        wander through the mesmerizing ruins of once-mighty empires. Uncover the
        secrets of sacred sites, where spirituality and devotion permeate the air,
        igniting a sense of wonder within your soul. For the adventure seeker, our
        itineraries offer adrenaline-pumping escapades, from trekking through rugged
        mountain ranges to conquering mighty rivers on exhilarating white-water rafting
        expeditions. Immerse yourself in the raw beauty of nature's masterpieces, from
        majestic waterfalls cascading down moss-covered cliffs to serene, untouched
        landscapes that whisper tales of untouched wilderness. At Timeless Journeys,
        we meticulously curate each trip, handpicking historical landmarks, religious
        sanctuaries, adrenaline-inducing activities, and natural wonders that will leave
        you breathless. Our experienced guides, with their wealth of knowledge, will
        illuminate the stories behind each destination, allowing you to truly connect
        with the places you visit. So, embark on a voyage of a lifetime with Timeless
        Journeys, where the threads of history, spirituality, adventure, and nature intertwine
        to create unforgettable memories etched in the fabric of your being.
      </p>
      <section className='people-experience'>
        <h1>What People Say About Us?</h1>
        <ul className='row'>
          <li className='col-sm-12 col-md-6 col-lg-4'>
            <Card>
              <Card.Img variant="top" src={Ronaldo} />
              <Card.Body>
                <Card.Title>
                  Cristiano Ronaldo <br />
                  <span>A Famous Football Player</span>
                </Card.Title>
                <Card.Text>
                  The experience with Travel was beyond words.
                  From flawless planning to extraordinary destinations,
                  it was a journey of a lifetime. Highly recommend their
                  expertise for an unforgettable and enriching travel experience.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li className='col-sm-12 col-md-6 col-lg-4'>
            <Card>
              <Card.Img variant="top" src={Downey} />
              <Card.Body>
                <Card.Title>
                  Robert Downey Jr. <br />
                  <span>A Famous Holleywood Actor</span>
                </Card.Title>
                <Card.Text>
                  My journey with Travel was truly magical. Impeccable planning,
                  remarkable destinations, and personalized touches made it an
                  unforgettable experience. Highly recommend them for an extraordinary
                  travel adventure that will leave you in awe.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
          <li className='col-sm-12 col-md-6 col-lg-4'>
            <Card>
              <Card.Img variant="top" src={BillGates} />
              <Card.Body>
                <Card.Title>
                  Bill Gates<br />
                  <span>CEO of Microsoft Company</span>
                </Card.Title>
                <Card.Text>
                  I can't express how incredible my experience was with Travel.
                  From start to finish, they exceeded my expectations, providing
                  seamless logistics, breathtaking destinations, and unforgettable
                  memories. Highly recommend their exceptional services for an
                  unparalleled travel adventure.
                </Card.Text>
              </Card.Body>
            </Card>
          </li>
        </ul>
      </section>
      </div>
      <Footer />
    </div>
  )
}

export default About