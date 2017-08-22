import React from 'react';

export default class SingleAlbum extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }


  render () {
    console.log(this.props)
    return (
      <div>
        <div>
          <h3>{this.props.selectedAlbum.name}</h3>
          <img src={this.props.selectedAlbum.imageUrl} className="img-thumbnail" />
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Artists</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.selectedAlbum.songs.map(song => {
              return (
                <tr key={song.id}>
                  <td>
                    <button className="btn btn-default btn-xs">
                      <span className="glyphicon glyphicon-play"></span>
                    </button>
                  </td>
                  <td>{song.name}</td>
                  <td>{song.artists.map(artist => artist.name).join(',')}</td>
                  <td>{song.genre}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
