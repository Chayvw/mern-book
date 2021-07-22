import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div className="container">
                <h2>Welcome to IGottaReadIt. Login to see your Saved Books!</h2>
                <Link to="login"><a class="waves-effect waves-light btn">Login</a></Link>

            </div>
        );
    }
}

export default Home;