import React from 'react';
//import ReactDOM from 'react-dom';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    //Initialize content
  }

  render () {
    return (
      <div className="col-xs-2">
        <sidebar>
          <img src="juke.svg" className="logo" />
          <section>
            <h4 className="menu-item active">
              <a href="#" onClick={this.props.clearSelectedAlbum}>ALBUMS</a>
            </h4>
          </section>
        </sidebar>
      </div>
    )
  }
}
