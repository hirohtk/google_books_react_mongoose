import React from "react";
import "./ResultsBox.css"

function ResultBox(props) {
    return (
        <div className="resultBox">
            <div className="row" id="row1">
            <p><h4>{props.title}</h4>
            <a className="waves-effect waves-light btn saveButton" id=""><i class="material-icons right">save</i>Save</a>
            <a className="waves-effect waves-light btn viewButton" id=""><i class="material-icons right">visibility</i>View</a></p>
            <p>Author(s): {props.authors}</p>
            </div>
            <div className="row">
                <div className="col s2">
                <img src={props.image} className="floatLeft"></img>
                </div>
            <div className="col s10">
            <p className="floatLeft description">{props.description}</p>
            </div>
            <br></br>
            <p className="floatLeft"><a href={props.link}>{props.link}</a></p>
            </div>
        </div>
    );
}

export default ResultBox;
