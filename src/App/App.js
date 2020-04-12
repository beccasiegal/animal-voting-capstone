import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import dummyStore from '../dummy-store'
import './App.css'

class App extends Component {
  state = {
   pictues: [],
    votes: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(dummyStore), 600)
  }

  renderNavRoutes() {
    const { votes, pictues } = this.state
    return (
      <>
        {['/', '/pictures/picturesId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <PicturesNav
                pictues={pictues}
                votes={votes}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          path='/votes/:voteId'
          render={routeProps => {
            const { voteId } = routeProps.match.params
            const vote = findVote(votes, voteId) || {}
            const folder = findPicture(Pictures, vote.pictureId)
            return (
              <PageNav
                {...routeProps}
                pictures={pictures}
              />
            )
          }}
        />
        <Route
          path='/add-picture'
          component={PageNav}
        />
        <Route
          path='/add-vote'
          component={PageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    const { votes, pictues } = this.state
    return (
      <>
        {['/', '/pictures/:pictureId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { pictureId } = routeProps.match.params
              const votesForPicturer = getVotesForPicture(votes, pictureId)
              return (
                <VoteListMain
                  {...routeProps}
                  votes={votesForPicturer}
                />
              )
            }}
          />
        )}
        <Route
          path='/vote/:voteId'
          render={routeProps => {
            const { voteId } = routeProps.match.params
            const vote = findVote(votes, voteId)
            return (
              <PageMain
                {...routeProps}
                vote={vote}
              />
            )
          }}
        />
        <Route
          path='/add-picture'
          component={AddPicture}
        />
        <Route
          path='/add-vote'
          render={routeProps => {
            return (
              <AddVote
                {...routeProps}
                pictures={pictures}
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
            <Link to='/'>Animal Voting Capstone</Link>
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
