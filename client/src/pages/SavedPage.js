import React from 'react';
import Nav from "../components/nav";
import NoBookBox from "../components/noBooks";
import ResultBox from "../components/ResultsBox";
import axios from "axios";

import './Page.css';

class SavedPage extends React.Component {

    state = {
        results: []
    }

    componentDidMount() {
        this.showSaved();
    }

    showSaved = () => {
        axios.get("/api/books")
            .then((response) => {
                // response contains JSON that comes from quering the database for all saved books
                // when querying Mongodb, the repsonse.data contains all fields in the document, including the id which I need for the delete
                this.setState({ results: response.data });
                console.log(this.state.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    delete = (id, title) => {
        console.log(`deleting book with id of ${id}`);
        console.log(`This book which I'm deleting is ${title}`);
        // DELETE takes params- givig it the specific param in the book that is to be delete
        axios.delete(`/api/books/${id}`).then((response) => {
            console.log(response);
            console.log((this.state.results))
            // for the array in results, return an array that is just each object's id key and value
            // then find the index where the value equals this id being saved
            var elementPos = this.state.results.map(function (x) { return x._id; }).indexOf(id);
            console.log(elementPos);
            // now, re-setting state without this element (splice modifies the original array)
            this.state.results.splice(elementPos, 1);
            this.setState({ results: this.state.results });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="container">
                    <div className="row">
                        <div className="staticJumbotron col s12">
                            <h3>React Google Books Search</h3>
                            <h4>Search for and Save Books of interest!</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="results">
                            <h3>Results</h3>
                            <div>
                                {
                                    (this.state.results.length === 0) ?
                                        <NoBookBox
                                            type={"save"}>
                                        </NoBookBox>
                                        :
                                        this.state.results.map((each) => (
                                            <ResultBox
                                                title={each.title}
                                                authors={each.authors}
                                                description={each.description}
                                                image={each.image}
                                                link={each.link}
                                                deleteId={each._id}
                                                type={"delete"}
                                                delete={this.delete}>
                                            </ResultBox>
                                        )
                                        )
                                }
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SavedPage;