import React from 'react'
import './css/travelOptionWrapper.css'

function TravelOptionWrapper(props: any) {
    return (
        <section className='travel-option'>
            <h2>{props.heading}</h2>
            <ul className='row m-0 p-0'>
                    {props.children}
            </ul>
        </section>
    )
}

export default TravelOptionWrapper