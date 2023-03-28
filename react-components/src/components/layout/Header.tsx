import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <nav className="header__nav header-nav">
          <ul className="header-nav__list">
            <NavLink className="header-nav__link" to={'/'}>
              Main
            </NavLink>
            <NavLink className="header-nav__link" to={'/about'}>
              About us
            </NavLink>
            <NavLink className="header-nav__link" to={'/form'}>
              Form
            </NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}
