import React, {useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './containers/Home/Home';
import Search from './containers/Search/Search';
import NoMatch from './containers/NoMatch/NoMatch';

 
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
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path ="/search" component={Search} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
  );
}

export default App;
