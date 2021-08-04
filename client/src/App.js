import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import NoMatch from './containers/NoMatch/NoMatch';
import NavBar from './containers/NavBar/NavBar';
import Login from './componets/Login/Login';
import FutureSearches from './componets/FutureSearches/FutureSearches';
import Books from './componets/Books/Books';

 
function App() {
  // axios call to check if my front end is connected to my backend
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
  <Router>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path ="/search" component={Search} />
      <Route path="/login" component={Login} />
      <Route path="/futuresearches" component={FutureSearches} />
      <Route path ="/books" component={Books} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
  );
}

export default App;
