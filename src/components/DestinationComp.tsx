import React from 'react';
import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import './css/destinationComp.css'

function DestinationComp(props: any) {
  return (
    <li className='col-sm-12 col-md-6 col-lg-4 destination p-2'>
      <Link to={props.link}>
        <Card>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Title>{props.location}</Card.Title>
            <Card.Text>
              <span aria-label='rupees'><CurrencyRupeeIcon /></span> {props.fare}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </li>
  )
}

export default DestinationComp