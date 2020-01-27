import React from "react";

function NoBookBox(props) {
    return (
        <div className="resultBox">
            <h4>No Books Here... Please {props.type} a book.</h4>
        </div>
    );
}

export default NoBookBox;
