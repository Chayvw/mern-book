import React, { useState } from 'react';

function Login(props) {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    return (
        <div class="row">
            <form class="col s4">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="password" type="password" class="validate" value={password} onChange={(e) =>{setPassword(e.target.value)}}/>
                        <label for="password">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate" value={email} onChange={(e) =>{setEmail(e.target.value)}} />
                        <label for="email">Email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="text" class="validate" value={name} onChange={(e) =>{setName(e.target.value)}} />
                        <label for="name">Name</label>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;