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

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: [],
      selectedAlbum: {},
    }

    this.setSelectedAlbum = this.setSelectedAlbum.bind(this)
  }

  componentDidMount () {
    Axios.get('api/albums')
      .then(response => this.setState({albums: response.data}))
      .catch(logError)
  }

  setSelectedAlbum (album) {
    Axios.get(`api/albums/${album.id}`)
      .then(response => {
        console.log(response.data)
        this.setState({selectedAlbum: response.data})
        console.log('selected album: ', this.state.selectedAlbum)
      })
      .catch(logError)
  }

  render () {

    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <div className="col-xs-10">
          <AllAlbums albums={this.state.albums} setSelectedAlbum={this.setSelectedAlbum} />
          {this.state.selectedAlbum.name &&
            (<SingleAlbum selectedAlbum={this.state.selectedAlbum} />)
          }
        </div>
        <Footer />
      </div>
    )
  }
}
