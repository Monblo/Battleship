import React, { Component } from 'react';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { StartGame } from './components/StartGame';
import { Game } from './components/Game';

import './custom.css'

export default class App extends Component {

  render () {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={StartGame} />
                    <Route exact path='/game' component={Game} />
                </Switch>
           </BrowserRouter>
      </>
    );
  }
}
