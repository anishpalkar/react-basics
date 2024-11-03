import RestaurantCard from "./RestuarantCard";
import RES_DATA from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  const [restaurantToDisplay, setRestaurantToDisplay] = useState(RES_DATA);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantToDisplay.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setRestaurantToDisplay(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantToDisplay.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
