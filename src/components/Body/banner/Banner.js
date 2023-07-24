import React from "react";

function Banner ({image, texte}) {
    return (
        <div className="banner">
            <span>{texte}</span>
            <img className="banner__img" src={image} alt="Bannière" />
        </div>
  );
}
   

export default Banner