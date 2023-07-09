import React, { useState, useEffect } from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TravelOptionWrapper from '../components/TravelOptionWrapper'
import DestinationComp from '../components/DestinationComp'
import './css/destination.css'
import { baseURI } from '../utils'
import axios from 'axios'

function Destination() {

  interface Dest {
    id: number;
    name: string;
    image: string;
    fare: number;
    description: string;
  }

  interface Category {
    [key: string]: Dest[]
  }

  const initialDest: Category = {
    '': [{
      id: 0,
      name: '',
      image: '',
      fare: 0,
      description: ''
    }]
  }

  const [dest, setDest] = useState(initialDest);

  const fetchInfo = async () => {
    const res = await axios.get(`${baseURI}/destinations/`);
    setDest(res.data)
  }

  useEffect(() => {
    fetchInfo();
  }, [])


  return (
    <div>
      <Background />
      <Header />
      <div className='main-container travel-option-container'>
        <h1>Travel Options</h1>
        {
          dest ? Object.keys(dest).map(category => {
            return <TravelOptionWrapper key={category} heading={category} className='row'>
              {
                dest[category].map(dest => {
                  return (
                    <DestinationComp key={dest.id} link={'/destinationDesc/' + dest.id} img={dest.image} location={dest.name} fare={dest.fare} />
                  )
                })
              }
            </TravelOptionWrapper>
          }) : <div></div>
        }

      </div>
      <Footer />
    </div>
  )
}

export default Destination