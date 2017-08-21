import React from 'react';

export default function AllAlbums (props) {

    return (
        <div>
          <h3>Albums</h3>
          <div className="row">
            {props.albums.map((album) => {
              return (
                <div className="col-xs-4" key={album.id}>
                  <a className="thumbnail" href="#">
                    <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
                    <div className="caption">
                      <h5>
                        <span>{album.name}</span>
                      </h5>
                      <small>{album.songs.length}</small>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
    )
}
