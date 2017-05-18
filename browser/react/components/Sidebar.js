import React from 'react';
import { Link } from 'react-router';

const Sidebar = (props) => {

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to='/albums'>ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link href='#' to='/artists'>ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <hr />
        <ul className="list-unstyled">
          {
          props.playlists.length ?
          props.playlists.map((list)=>{
          return (
            <li className="playlist-item menu-item" key={list.id}>
              <Link to="FILL_ME_IN">{list.name}</Link>
            </li>
          )
          })
        :
        null
          }

        </ul>
        <h4>
          <Link href='#' className="btn btn-primary btn-block" to={'/playlist'}>
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
    </sidebar>
  );
}

export default Sidebar;
