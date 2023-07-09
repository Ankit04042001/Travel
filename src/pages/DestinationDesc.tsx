import React, {useState, useEffect} from 'react'
import Background from '../components/Background'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './css/destinationDesc.css'
import { useParams } from 'react-router-dom'
import { baseURI } from '../utils'
import axios from 'axios'

export function DestinationDesc() {
    const {id} = useParams();
    interface Dest{
        id:number,
        name:string,
        image:string,
        fare:number,
        category:string,
        description:string
    }
    const initialDest = {id:0, name:'', image:'', fare:'', category:'', description:''}
    const [dest, setDest] = useState(initialDest)
    const fetchInfo = async()=>{
        const res = await axios.get(`${baseURI}/destination/${id}`)
        console.log(res)
        setDest(res.data)
    }

    useEffect(()=>{
        fetchInfo()
    },[])
    return (
        <div>
            <Background />
            <Header />
            <div className='main-container destination-desc'>
                <div className='container'>                        
                <h1>About {dest.name}</h1>
                <div className='image'><img src={dest.image} alt={dest.name + ' image'} /></div>
                <p>
                    {dest.description}
                </p>
            </div>
            <Footer />
            </div>
        </div>
    )
}
