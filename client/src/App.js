import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
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
  // useEffect(() => {
  //   axios.get("/api/config").then((response) => {
  //     console.log(response.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }, [])
  const backgroundStyle ={
    backgroundColor: "#fff9c4",
    height: "900px",
    // width: "1250px",
    // margin: "0",
    padding: "0"
    // display: "flex",
  // flexDirection: "column"
  // padding:0,
  // margin: 0 auto
  // boxSizing:"border-box"
}

  return (
    <div className= "container-main" style={backgroundStyle}>
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
  </div>
  );
}

export default App;
