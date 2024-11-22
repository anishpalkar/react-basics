import RestaurantCard from "./RestuarantCard";
import RES_DATA from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //useState is used to create "local state variables" inside functional components
  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [restaurantToDisplay, setRestaurantToDisplay] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantToDisplay, setFilteredRestaurantToDisplay] =
    useState([]);
  //on change in state variable React re-renders the whole component in Virtual DOM with constructing a new tree with updates, it will compare both the old and newly constructed tree (Diff algo) and then it will only update "changed part"(diffed) in actual DOM.

  //below useEffect callback is called after the component renders itself first time (see Header.js)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2380683&lng=72.8522512&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
    setRestaurantToDisplay(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantToDisplay(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantToDisplay.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredList = restaurantToDisplay.filter((restaurant) =>
                restaurant?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurantToDisplay(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurantToDisplay.filter(
              (restaurant) => restaurant?.info?.avgRating > 4.5
            );
            setFilteredRestaurantToDisplay(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurantToDisplay.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
