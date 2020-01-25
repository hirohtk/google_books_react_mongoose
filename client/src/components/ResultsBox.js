import React from "react";
import "./ResultsBox.css"

function ResultBox(props) {
    return (
        <div className="resultBox">
            <div className="row" id="row1">
            <p><h4>{props.title}</h4>
            <a className="waves-effect waves-light btn saveButton" id=""><i class="material-icons right">save</i>Save</a>
            <a className="waves-effect waves-light btn viewButton" id=""><i class="material-icons right">visibility</i>View</a></p>
            <p>Author(s):{props.authors}</p>
            </div>
            <div className="row">
            <img src={props.image} className="floatLeft"></img>
            <p className="floatLeft">{props.description}</p>
            <br></br>
            <p className="floatLeft"><a href={props.link}>{props.link}</a></p>
            </div>
        </div>
    );
}

export default ResultBox;
