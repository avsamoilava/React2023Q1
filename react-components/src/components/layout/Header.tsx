import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul>
            <NavLink to={'/'}>Main</NavLink>
            <NavLink to={'/about'}>About us</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}
