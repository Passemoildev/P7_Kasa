import React from "react";
import emptyStar from "../../../assets/stars_rating/star-inactive 1.png";
import fullStar from "../../../assets/stars_rating/star-active 1.png";

function Rate (props){
    const score = props.score;
    const notes = [1,2,3,4,5];

    return(
        <div className="contRate">
            {notes.map((note)=>
                score>=note?(
                    <img
                    key={note.toString()}
                    className="fullStar" alt="full star" src={fullStar}/>
                ):(
                    <img
                    key={note.toString()}
                    className="emptyStar" alt="empty star" src={emptyStar}/>

                )
            )}
        </div>
    );
};

export default Rate