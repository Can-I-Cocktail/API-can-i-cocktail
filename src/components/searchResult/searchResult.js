import React from "react";
import cocktailData from "../../cocktailData";

const SearchResult = (props) => {
    return (
      <div>
        <img className="fitting-image" src={props.img} />
        <h2>{props.cocktailName}</h2>
      </div>
    );
}

export default SearchResult