import React from 'react';
//import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Axios from 'axios';

const toJson = response => response.data;
const log = console.log.bind(console);
const logError = console.error.bind(console);

// const audio = document.createElement('audio');

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentlyPlaying: {},
      audioPlayer: document.createElement('audio'),
      audioControl: {

      }
    }

    this.setSelectedAlbum = this.setSelectedAlbum.bind(this)
    this.clearSelectedAlbum = this.clearSelectedAlbum.bind(this)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.resume = this.resume.bind(this)
  }

  componentDidMount () {
    Axios.get('api/albums')
      .then(response => this.setState({albums: response.data}))
      .catch(logError)
  }

  setSelectedAlbum (album) {
    Axios.get(`api/albums/${album.id}`)
      .then(response => {
        this.setState({selectedAlbum: response.data})
      })
      .catch(logError)
  }

  clearSelectedAlbum () {
    this.setState({selectedAlbum: {}})
  }

  play (song) {
    this.setState(
      {currentlyPlaying: song},
      () => {
        console.log('currentlyPlaying: ', this.state.currentlyPlaying);
        this.state.audioPlayer.src = this.state.currentlyPlaying.audioUrl;
        this.state.audioPlayer.load();
        this.state.audioPlayer.play();
      })
  }

  pause () {
    this.state.audioPlayer.pause();
  }

  resume () {
    this.state.audioPlayer.play();
  }

  render () {

    return (
      <div id="main" className="container-fluid">
        <Sidebar clearSelectedAlbum={this.clearSelectedAlbum} />
        <div className="col-xs-10">
          {this.state.selectedAlbum.name
            ? (<SingleAlbum selectedAlbum={this.state.selectedAlbum} play={this.play} currentlyPlaying={this.state.currentlyPlaying} audioPlayer={this.state.audioPlayer} />)
            : (<AllAlbums albums={this.state.albums} setSelectedAlbum={this.setSelectedAlbum} />)
          }
        </div>
        <Footer currentlyPlaying={this.state.currentlyPlaying} audioPlayer={this.state.audioPlayer} />
      </div>
    )
  }
}
