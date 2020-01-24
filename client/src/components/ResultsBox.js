import React from "react";
import "./ResultsBox.css"

function ResultBox(props) {
    return (
        <div className="resultBox">
            <div className="row" id="row1">
            <p>Book title:{props.title}
            <a className="waves-effect waves-light btn saveButton" id=""><i class="material-icons right">save</i>Save</a>
            <a className="waves-effect waves-light btn viewButton" id=""><i class="material-icons right">visibility</i>View</a></p>
            <p>Authors:{props.authors}</p>
            </div>
            <div className="row">
            <img src="https://cdn4.buysellads.net/uu/1/41312/1545083324-1539370929-mailchimp-Yellow-260x200.png" className="floatLeft"></img>
            <p className="floatLeft">Description: {props.description}</p>
            </div>
        </div>
    );
}

export default ResultBox;
