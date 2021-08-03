import React, { useState } from 'react';
import axios from 'axios';

  function Login(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios call to login
        axios
            .post("/api/user", { email: email, password: password, name: name })
            .then((response) => {
                console.log(response.data);
                props.history.push("/search")
                // const loginHandle =(response.data.data);

            })
            .catch((err) => {
                console.log(err);
            });
        console.log("Working")
    };

    return (
        <div className="row">
            <form className="col s4" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="password" type="password" className="validate" value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" value={email} onChange={(e) =>{setEmail(e.target.value)}} />
                        <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="text" className="validate" value={name} onChange={(e) =>{setName(e.target.value)}} />
                        <label htmlFor="name">Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <button className="btn waves-effect waves-light" type="submit" name="action">SignUP
                        </button>
                        </div>
                        </div>
            </form>
        </div>
    );
}

export default Login;