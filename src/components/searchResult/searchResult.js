import React from "react";
import cocktailData from "../../cocktailData";

/*
Right now this is set up to map over our whole list of cocktails and returns a recipe card for each cocktail
 */

// const SearchResult = (props) => {
//   return (
//     <div className="searchResults">
//       {cocktailData.map((cocktail) => {
//         return (
//           <div>
//             <img className="fitting-image" src={cocktail.img} />
//             <h2>{cocktail.cocktailName}</h2>
//             <ul>
//               {cocktail.recipe.map((ingredient) => {
//                 return <li>{ingredient}</li>;
//               })}
//             </ul>
//             <ul>
//               {cocktail.directions.map((step) => {
//                 return <li>{step}</li>;
//               })}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

/*
Need to pass the cocktailMatches array - which is the state "matches" - to the SearchResult component to be mapped over
*/
const SearchResult = ({ matches }) => {
  return (
    <div className="searchResults">
      {matches.map((cocktail) => {
        return (
          <div>
            <img className="fitting-image" src={cocktail.img} />
            <h2>{cocktail.cocktailName}</h2>
            <ul>
              {cocktail.recipe.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
            <ul>
              {cocktail.directions.map((step) => {
                return <li>{step}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
