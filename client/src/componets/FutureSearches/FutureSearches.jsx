import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function NewBook(props) {
    // define state thats going to hold the input value 
    const [book, setBook] = useState("");

    // define state thats going to update the checkbox
    const [checked, setChecked] = useState(false);

    const handleInputChange= (event) => {
        // create the event handler that updates the states when the input value changes
        setBook(event.target.value)
    };

    const handleCheckBoxChange = () =>{
        setChecked(true);
        }

        const handleSubmit = (event)=>{
            event.preventDefault()
            // top three most difficult things to figure out
            axios.post("/api/books", {name:book, hasRead:checked}).then((response)=>{
                console.log(response.data);
                props.history.push("/books")
            }).catch((err)=>{
                console.log(err)
            });

            // components get passed props from react router and they we can find history 

    }
    
    return (
        <div className="container">
            <div class="row">
                <form className="col s12" onSubmit={handleSubmit} >
                    <div className="row">
                        <div className="input-field col s8">
                            <input id="name" type="text" value={book} onChange={handleInputChange} />
                            <label htmlFor="book">Book Name</label>
                        </div>
                    </div>
                </form>
                <div>
                    <label>
                        <input className="input-field col s8" type="checkbox" onChange={handleCheckBoxChange}/>
                        <span>Vegetarian?</span>
                    </label>
                </div>
                <div className="row">
                    <div className="col s4">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Add
    <i className="material-icons right">Book</i>
                        </button>
                        <Link to='/'> <button className="waves-effect waves-light btn-large">Home</button></Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default NewBook;