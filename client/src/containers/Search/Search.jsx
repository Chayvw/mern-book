import React, { Component } from 'react';
import axios from 'axios';
import { ExternalLink } from 'react-external-link';

class Search extends Component {
    constructor() {
        super()

        this.state = {
            bookInput: "",
            bookInfo: [],
            titleAuthor: "",
            link: "",
            authorInput: "",
            titleInput: ""

        }
    }

    handleBookSearch = (event) => {
        event.preventDefault();

        const queryTitle = this.state.titleInput;
        const queryAuthor = this.state.authorInput;
        const apiKey = 'AIzaSyDPs9WBQADJ0siNTc2tjnI9RlncFclxhRU'
        const urlBase = `https://www.googleapis.com/books/v1/volumes?q=${queryTitle}+inauthor:${queryAuthor}&key=${apiKey}`

        axios({
            url: urlBase,
            method: 'GET'
        }).then((response) => {
            console.log(response.data.items)
            console.log(response.data.items[0].searchInfo.textSnippet)
            console.log(response.data.items[0].volumeInfo)
            console.log(response.data.items[0].volumeInfo.title)
            console.log(response.data.items[0].volumeInfo.imageLinks.smallThumbnail)
            console.log(response.data.items[0].volumeInfo.canonicalVolumeLink)

            console.log(response.data.items)
            console.log(response.data.items[0].volumeInfo.authors)
            console.log(response.data.items[0].volumeInfo.categories)
            console.log(response.data.items[0].volumeInfo.description)

            this.setState({
                bookInfo: response.data.items[0].volumeInfo.description,
                titleAuthor: response.data.items[0].volumeInfo.authors,
                link: response.data.items[0].volumeInfo.canonicalVolumeLink,
                bookImage: response.data.items[0].volumeInfo.imageLinks.smallThumbnail


            })
        })


    }

    captureUserInput = (inputTitle, inputAuthor) => {
        this.setState({
            titleInput: inputTitle,
            authorInput: inputAuthor
        }, () => { console.log(inputTitle, inputAuthor) })



    }
    render() {
        return (
            <>
                <div className="container">
                    <div class="row">
                        <div class="col s12">

                            <h5>Search</h5>
                            <button onClick={this.handleBookSearch}>Click</button>
                            <div class="card small">
                                <div class="row">
                                    <div class="col s12 m6">
                                        <div class="card">
                                            <div class="card-image">
                                                <img src={this.state.bookImage} />
                                                <span class="card-title"></span>


                                                <div class="card-content">
                                                    <p className="blue-text text-darken-2">Description:{this.state.bookInfo}</p>
                                                    <p className="blue-text text-darken-2">Author:{this.state.titleAuthor}</p>
                                                    < ExternalLink href={this.state.link}>
                                                        <span>Click for More!</span>
                                                    </ExternalLink>
                                                </div>
                                                {/* <div class="row">
                                                    <div class="input-field col s12">
                                                        <input type="text" value={this.state.inputTitle} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                                                        <label for="email">Title</label>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-field col s12">
                                                            <input type="text" value={this.state.inputAuthor} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                                                            <label for="email">Author</label>
                                                        </div>
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" value={this.state.inputTitle} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                        <label for="email">Title</label>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <input type="text" value={this.state.inputAuthor} onChange={(event) => { this.captureUserInput(event.target.value) }} />
                            <label for="email">Author</label>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Search;
