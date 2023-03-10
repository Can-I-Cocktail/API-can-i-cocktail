import React from "react";
import cocktailData from "../../cocktailData";

const cocktailList = cocktailData;
console.log(cocktailList);

const SingleRecipe = () => {
  return (
    <div>
      <img className="fitting-image" src={cocktailList[img]} />
      <h2>{cocktailList[cocktailName]}</h2>
      <h3>{cocktailList[ingredients]}</h3>
      <h3>{cocktailList[recipe]}</h3>
      <h3>{cocktailList[directions]}</h3>
    </div>
  );
};
console.log(cocktailList[0].recipe);

export default SingleRecipe;
