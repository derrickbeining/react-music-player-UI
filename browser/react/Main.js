import React from 'react';
//import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Axios from 'axios';


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
    const toJson = response => response.data;
    const log = console.log.bind(console);
    const logError = console.error.bind(console);

    Axios.get('api/albums')
      .then(response => this.setState({albums: response.data}))
      .catch(logError)
  }

  setSelectedAlbum (album) {
    this.setState({selectedAlbum: album})
    console.log("Selected album: ", this.state.selectedAlbum)
  }

  render () {
    if (this.state.selectedAlbum.length) {
      return (
        <div id="main" className="container-fluid">
          <Sidebar />
          <div className="col-xs-10">
            <AllAlbums albums={this.state.albums} setSelectedAlbum={this.setSelectedAlbum} />
              <SingleAlbum currentAlbum={this.state.selectedAlbum}/>
          </div>
          <Footer />
        </div>
      )
    } else {
      return (
        <div id="main" className="container-fluid">
          <Sidebar />
          <div className="col-xs-10">
            <AllAlbums albums={this.state.albums} setSelectedAlbum={this.setSelectedAlbum} />
          </div>
          <Footer />
        </div>
      )
    }
  }
}
