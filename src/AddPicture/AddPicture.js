import React, { Component } from 'react'
import NotefulForm from '../AnimalPicture/AnimalPictures'
import AnimalPictures from '../AnimalPicture/AnimalPictures'


export default class AddPicture extends Component {
  render() {
    return (
      <section className='AddPicture'>
        <h2>Add a Picture</h2>
        <AnimalPictures>
          <div className='field'>
            <label htmlFor='picture-name-input'>
              Name
            </label>
            <input type='text' id='picture-name-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add picture
            </button>
          </div>
        </AnimalPictures>
      </section>
    )
  }
}
