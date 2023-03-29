import React from 'react';
import { RSIcon, GithubIcon } from '../icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__item">
          <a href="https://rs.school/react/" target="_blank" rel="noreferrer">
            <RSIcon />
          </a>
        </div>
        <div className="footer__item">2023</div>
        <div className="footer__item footer__item_git">
          <a href="https://github.com/avsamoilava" target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
