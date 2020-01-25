import React from 'react';
import Nav from "../components/nav";
import NoBookBox from "../components/noBooks";
import ResultBox from "../components/ResultsBox";

import './Page.css';

class SavedPage extends React.Component {
    state = {
        results: []
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <div className="container">
                    <div className="row">
                        <div className="staticJumbotron col s12">
                            <h3>(React) Google Books Search</h3>
                            <h4>Search for and Save Books of interest!</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="results">
                            <h3>Results</h3>
                            <div>
                                {
                                    (this.state.results.length === 0) ?
                                        <NoBookBox>
                                        </NoBookBox>
                                        :
                                        this.state.results.map((each) => (
                                            <ResultBox
                                                title={each.title}
                                                authors={each.authors}
                                                description={each.description}
                                                image={each.image}
                                                link={each.link}>
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