import React from 'react';

export default function SingleAlbum (props) {
  return (
    <div>
      <div>
        <h3>{props.selectedAlbum.name}</h3>
        <img src={props.selectedAlbum.imageUrl} className="img-thumbnail" />
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
          {props.selectedAlbum.songs.map(song => {
            return (
              <tr key={song.id} className={props.currentlyPlaying.id === song.id && 'active'}>
                <td>
                  {props.currentlyPlaying !== song &&
                    (<button className="btn btn-default btn-xs" onClick={() => props.play(song)}>
                      <span className="glyphicon glyphicon-play"></span>
                    </button>)
                  }
                </td>
                <td>{song.name}</td>
                <td>{song.artists.map(artist => artist.name).join(', ')}</td>
                <td>{song.genre}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
