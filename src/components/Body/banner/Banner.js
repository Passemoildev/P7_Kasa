import React from "react";

function Banner ({image, texte}) {
    return (
        <div className="banner">
            <span className="banner__txt">{texte}</span>
            <img className="banner__img" src={image} alt="Bannière" />
        </div>
  );
}
   

export default Banner