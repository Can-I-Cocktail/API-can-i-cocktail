import React from "react";
import cocktailData from "../../cocktailData";

const cocktailList = cocktailData;
console.log(cocktailList);

const SingleRecipe = () => {
  return (
    <div>
      <img className="fitting-image" src={cocktailList[0].img} />
      <h2>{cocktailList[0].cocktailName}</h2>
      <h3>{cocktailList[0].ingredients}</h3>
      <h3>{cocktailList[0].recipe}</h3>
      <h3>{cocktailList[0].directions}</h3>
    </div>
  );
};
console.log(cocktailList[0].recipe);

export default SingleRecipe;
