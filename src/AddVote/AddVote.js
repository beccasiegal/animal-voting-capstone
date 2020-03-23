import React, { Component } from 'react'
import NotefulForm from '../AnimalPicture/AnimalPictures'
import './AddVote.css'

export default class AddVote extends Component {
  static defaultProps = {
    AnimalPicture: [],
  }
  render() {
    const {AddVote } = this.props
    return (
      <section className='AddVote'>
        <h2>Create a vote</h2>
        <AnimalPicture>
          <div className='field'>
            <label htmlFor='vote-name-input'>
              Name
            </label>
            <input type='text' id='vote-name-input' />
          </div>
         
          <div className='buttons'>
            <button type='submit'>
              Add Vote
            </button>
          </div>
        </AnimalPicture>
      </section>
    )
  }
}
