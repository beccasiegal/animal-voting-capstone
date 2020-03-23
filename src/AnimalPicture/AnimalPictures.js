import React from 'react'
import './AnimalPictures.css'

export default function AnimalPictures(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Animal-Pictures', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}
