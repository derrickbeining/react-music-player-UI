import React from 'react';
//import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import AllAlbums from './AllAlbums';
import Axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      albums: []
    }
  }

  componentDidMount () {
    const toJson = response => response.data;
    const log = console.log.bind(console);
    const logError = console.error.bind(console);

    Axios.get('api/albums')
      .then(response => this.setState({albums: response.data}))
      .catch(logError)
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <Sidebar />
        <AllAlbums albums={this.state.albums} />
        <Footer />
      </div>
    );
  }
}
