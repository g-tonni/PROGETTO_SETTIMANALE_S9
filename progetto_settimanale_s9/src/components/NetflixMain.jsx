import { Component } from 'react'
import { Container } from 'react-bootstrap'
import TVShows from './TVShows'
import FilmRow from './FilmRow'

class NetflixMain extends Component {
  render() {
    return (
      <Container fluid className="bg-dark min-vh-100">
        <TVShows />
        <FilmRow titleRow="Harry Potter" filmName="Harry Potter" />
        <FilmRow titleRow="Star Wars" filmName="Star Wars" />
        <FilmRow titleRow="Halloween" filmName="Halloween" />
        <FilmRow titleRow="Horror" filmName="Horror" />
        <FilmRow titleRow="Shrek" filmName="Shrek" />
        <FilmRow titleRow="Ice Age" filmName="Ice Age" />
      </Container>
    )
  }
}

export default NetflixMain
