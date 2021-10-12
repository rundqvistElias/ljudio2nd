import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import '../styles/navigation.css';


function Navigation() {
    const [search, setSearch] = useState('')
  

    function refreshPage() {
        window.location.reload(false);
      }


    return (
        <nav className="navbar">
            <div className="logoWrapper">
                <span className="stylish">LJUDIO</span>
                <span className="logo">APP</span>
            </div>

        <form>
            <input className="inputSearch" type="text" value={search} onChange={e=> {setSearch(e.target.value)}} />
            <Link  to={`/search/songs/${search}`}>
            <button className="buttonHide" type="submit">SEARCH</button> 
            </Link>
        </form>
        <ul className="navigation">
                <Router>
                <li className="parent" onClick={refreshPage}><Link to="/" className="routeHome">Home</Link></li>
                <Route exact path="/"/>
                </Router>
            </ul>
        </nav>  
    )

}

export default Navigation;