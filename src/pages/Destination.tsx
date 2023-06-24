import React from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TravelOptionWrapper from '../components/TravelOptionWrapper'
import ManyMore from '../components/ManyMore'
import DestinationComp from '../components/DestinationComp'
import image1 from '../images/image1.jpg'
import './css/destination.css'

function Destination() {
  return (
    <div>
      <Background />
      <Header />
      <div className='main-container travel-option-container'>
        <h1>Travel Options</h1>
        <TravelOptionWrapper heading='Active Adventure' className='row'>
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
        </TravelOptionWrapper>
        <TravelOptionWrapper heading='Nature' className='row'>
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
          <DestinationComp link='/destinationDesc' img={image1} location='Mumbai' fare={1199} />
        </TravelOptionWrapper>
      </div>
      <Footer />
    </div>
  )
}

export default Destination