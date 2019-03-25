import React, { Component } from 'react';
import moment from 'moment';
import PortfolioContainer from './portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Tyrel Huseby</h1>
        <PortfolioContainer />
        <PortfolioContainer />
        <PortfolioContainer />
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
    );
  }
}
