import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Vote.css'

export default function Vote(props) {
  return (
    <div className='Vote'>
      <h2 className='Vote__title'>
        <Link to={`/vote/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <div className='Vote__dates'>
        <div className='Vote__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}
