import React from 'react'
import './css/background.css'

function Background(props: any) {
  return (
    <>
      <div className='backgroundWrapper'>
        {
          props.image?
        <div className='background'>
        </div>:<div></div>
        }
      </div>
      <div className='overlay'></div >
    </>
  )
}

export default Background