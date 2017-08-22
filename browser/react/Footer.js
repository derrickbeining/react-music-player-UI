import React from 'react';
//import ReactDOM from 'react-dom';

export default function Footer (props) {
  if (!props.currentlyPlaying.id) {
    return null;
  }
  const aSongIsPlaying = props.currentlyPlaying.id !== undefined;
  return (
    <footer>
      <div className="pull-left">
        <button className="btn btn-default">
          <span className="glyphicon glyphicon-step-backward"></span>
        </button>
        <button className="btn btn-default">
          <span className={aSongIsPlaying
            ? "glyphicon glyphicon-pause"
            : "glyphicon glyphicon-play"} />
        </button>
        <button className="btn btn-default">
          <span className="glyphicon glyphicon-step-forward"></span>
        </button>
      </div>
      <div className="bar">
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </footer>
  )
}
