import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import '../CSS/header.css';

class Header extends Component {
  getPlayerData() {
    const playerData = JSON.parse(localStorage.getItem('state'));
    return playerData;
  }

  getGravatarImgUrl(email) {
    const hash = md5(email).toString();
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return url;
  }

  render() {
    const { player: { name, score, gravatarEmail } } = this.getPlayerData();
    return (
      <header className="feedback-header">
        <img
          src={ this.getGravatarImgUrl(gravatarEmail) }
          alt="user"
          data-testid="header-profile-picture"
        />
        <h3
          className="feedback-player-name"
          data-testid="header-player-name"
        >
          { name }
        </h3>
        <h3 data-testid="header-score">
          { score }
        </h3>
      </header>
    );
  }
}

export default Header;
