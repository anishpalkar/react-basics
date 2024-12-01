import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  if (resInfo === null) {
    return <Shimmer />;
  }

  const {
    name,
    locality,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
  } = resInfo[2].card.card.info;

  const itemCards =
    resInfo[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  //console.log(itemCards);
  return (
    <div>
      <div>
        <div>
          <h3>{name}</h3>
        </div>
        <div>{avgRating} stars</div>
        <div>{totalRatingsString}</div>
        <div>{locality}</div>
        <div>{cuisines.join(", ")}</div>
        <div>{costForTwoMessage}</div>
      </div>

      <div>
        <ul>
          {itemCards.map((item) => {
            const { id, name, defaultPrice, price } = item.card.info;
            return (
              <li key={id}>
                {name} Rs. {defaultPrice ? defaultPrice / 100 : price / 100}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
