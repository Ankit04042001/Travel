import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import './css/home.css'
import ManyMore from '../components/ManyMore'
import DestinationComp from '../components/DestinationComp'
import Footer from '../components/Footer'
import Background from '../components/Background';
import { baseURI } from '../utils'
import axios from 'axios'


function Home() {
  interface Dest {
    id: number,
    name: string,
    image: string,
    fare: number,
    description: string
  }

  const InitialDest: Dest[] = [{ id: 0, name: '', image: '', fare: 0, description: '' }]

  const [dest, setDest] = useState(InitialDest)
  const fetchDestination = async () => {
    const res = await axios.get(`${baseURI}/destinations/`);
    let destinations = []
    for(let category in res.data){
      destinations.push(res.data[category])
    }
    destinations = destinations.flat()

    let arr = []
    for(let i=0;i<5;i++){
      arr.push(destinations[i]);
    }
    setDest(arr);
  }

  useEffect(() => {
    fetchDestination()
  }, [])


  return (
    <div>
      <Background image={true} />
      <Header />
      <div className='heading'>
        <h1>Explore Incredible India: Journey through Time, Culture, and Natural Splendors.</h1>
      </div>
      <section className='destinations'>
        <h2>Destinations</h2>
        <div className='container'>
          <div className='row'>
            {dest ? dest.map(dest => {
              return (
                <DestinationComp key={dest.id} link={'/destinationDesc/' + dest.id} img={dest.image} location={dest.name} fare={dest.fare} />
              )
            }) : <div></div>}
            <ManyMore link='destination' />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home