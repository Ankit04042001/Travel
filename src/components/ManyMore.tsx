import React from 'react'
import {Link} from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './css/manyMore.css'

function ManyMore(props:any) {
  return (
    <div className='col-sm-10 col-md-5 col-lg-4 destination p-2'>
        <Link to={props.link}>
            <div className='many-more' aria-label='Explore More'>
                <ArrowForwardIcon />
            </div>
        </Link>
    </div>
  )
}

export default ManyMore