import React, { useState } from 'react'
import Home from './views/Home';
import Navigation from './components/Navigation';
import SearchSong from './views/SearchSong';
import Player from './components/Player'
import './App.css';
import Footer from './components/footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Context } from './components/context';

function App() {
    const [songs, setSongs] = useState([])

  return (
    <Router>
    <div className="navigation">
      <Navigation />
    </div>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
    <Context.Provider value={{songs, setSongs}}>
    <Route exact path="/search/songs/:search">
      <SearchSong />
    </Route>
    <Route exact path="/watch/:videoId">
              <Player/>
    </Route>
    </Context.Provider>
    
    </Switch>


    <Footer />
  </Router>

  
  )
  
}

export default App
