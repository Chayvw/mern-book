import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


class Home extends Component {
    render() {
        // const backgroundStyle ={
        //     backgroundColor: "#26a69a",
        //     height: "100vh",
        //     width: "100vw"
        // }
        return (
            <div className="container-home" >
                <div className="row">
                    <div className="col">
                        <h2 style={{ color: "red" }}>Welcome to IGottaReadIt</h2>
                        <Link to="login"><a class="waves-effect waves-light btn">Login</a></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;