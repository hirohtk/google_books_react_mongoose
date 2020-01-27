import React from "react";
import "./ResultsBox.css"

function ResultBox(props) {
    return (
        <div className="resultBox">
            <div className="row" id="row1">
            <p><h4>{props.title}</h4>
            <a className="waves-effect waves-light btn saveButton" id="" onClick=
        // Since I'm reusing this component, below I'm asking if there is a props.delete (the search component doesn't).
        // This way, clicking this button will do different things depending on what component it's in.  
        // If there is a props.delete, then do props.delete, otherwise, do save
            {
                (props.delete) ? () => props.delete(props.deleteId, props.title) : () => props.save(props.id)
            }
            ><i class="material-icons right">{props.type}</i>{props.type}</a>
            <a className="waves-effect waves-light btn viewButton" id="" href={props.link} target="_blank"><i class="material-icons right">visibility</i>View</a></p>
            <p>Author(s): {props.authors}</p>
            </div>
            <div className="row">
                <div className="col s2">
                <img src={(props.image.contains("http")) ? props.img : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"} className="floatLeft"></img>
                </div>
            <div className="col s10">
            <p className="floatLeft description">{props.description}</p>
            </div>
            <br></br>
            </div>
        </div>
    );
}

export default ResultBox;
