import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dummyStore from '../dummy-store'
import './App.css'

class App extends Component {
  state = {
   animals: [],
    names: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderNavRoutes() {
    const { animals, names } = this.state
    return (
      <>
        {['/', '/animals/animalsid'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <PicturesNav
                animals={animals}
                names={names}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          path='/names/:animalId'
          render={routeProps => {
            const { animalId } = routeProps.match.params
            const name = findName(name, animalId) || {}
            const animal = findAnimal(animal, animal_id)
            return (
              <PageNav
                {...routeProps}
                animal={animal}
              />
            )
          }}
        />
        <Route
          path='/add-animal'
          component={PageNav}
        />
        <Route
          path='/add-name'
          component={PageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    const { name, animal } = this.state
    return (
      <>
        {['/', '/animals/:animalId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { animalId } = routeProps.match.params
              const  getVotesForAnimal(votes, name_Id)
              return (
                <VoteListMain
                  {...routeProps}
                  votes={votesForAnimal}
                />
              )
            }}
          />
        )}
        <Route
          path='/names/:name_Id'
          render={routeProps => {
            const { name_Id } = routeProps.match.params
            const vote = findVote(votes, name_Id)
            return (
              <PageMain
                {...routeProps}
                vote={vote}
              />
            )
          }}
        />
        <Route
          path='/add-animal'
          component={AddAnimal}
        />
        <Route
          path='/add-name'
          render={routeProps => {
            return (
              <AddVote
                {...routeProps}
                animals={animals}
              />
            )
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Animal Naming and Voting</Link>
            {' '}
            <FontAwesomeIcon icon='check-double' />
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}

export default App
