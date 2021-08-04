import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { response } from 'express';

class Books extends Component {
    // adding state for my books and setting it to an empty array
    state = {
       books: [],
       

    }
    // componentDidMount because this is a functional component
    componentDidMount() {
        this.getBooks()

    };


    getBooks = () => {
        axios.get("api/books")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    books: response.data.data
                });
            }).catch((err) => { console.log(err) });
    }

    handleDelete = (id) => {
        // console.log("handled")
        // took 7 hours to realize i should remove the semi colon in my route 
        axios.delete(`/api/books/${id}`)
            .then((response) => {
                console.log("Call was made")
                console.log(response.data);
                this.getBooks();
            }).catch((err) => { console.log(err) });

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s4">
                        <h3>Books:</h3>
                    </div >
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {this.state.books.map((book) => {
                                    return (
                                        <div key={book._id} className="container">
                                            <div className="row">
                                                <div className="col s8">
                                                    <h4>{book.name}</h4>
                                                    <button className="waves-effect waves-light btn-small" onClick={() => { this.handleDelete(book._id) }}> Delete</button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })}
                                <div className="container">
                                    <div className="row">
                                        <div className="col s6">
                                            <Link to='/futuresearches'> <button className="waves-effect waves-light btn-large"> Add Book</button></Link>
                                    
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col s6">
                                            <Link to='/search'> <button className="waves-effect waves-light btn-large"> Find Books </button></Link>


                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                {/* if the length is 0 it will return no ingredients at this time */}
                                {this.state.books.length === 0 && <p>No Books at the moment</p>}
                            </div>
                        </div >
                    </div >
                </div >
            </div>
        );
    }
}

export default Books;