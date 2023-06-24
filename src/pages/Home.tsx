import React from 'react'
import Header from '../components/Header'
import './css/home.css'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'
import ManyMore from '../components/ManyMore'
import DestinationComp from '../components/DestinationComp'
import Footer from '../components/Footer'
import Background from '../components/Background';

function Home() {
  return (
    <div>
      <Background image={true}/>
      <Header />
      <div className='heading'>
        <h1>Explore Incredible India: Journey through Time, Culture, and Natural Splendors.</h1>
      </div>
      <section className='destinations'>
        <h2>Destinations</h2>
        <div className='container'>
          <div className='row'>
            <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
            <DestinationComp link='/destinationDesc' img={image2} location='Mumbai' fare={1199} />
            <DestinationComp link='/destinationDesc' img={image3} location='Mumbai' fare={1199} />
            <DestinationComp link='/destinationDesc' img={image4} location='Mumbai' fare={1199} />
            <DestinationComp link='/destinationDesc' img={image5} location='Mumbai' fare={1199} />
            <ManyMore link='destination'/>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home