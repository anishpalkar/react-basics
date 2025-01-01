import RestaurantCard from "./RestuarantCard";
import RES_DATA from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  //useState is used to create "local state variables" inside functional components
  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  const [restaurantToDisplay, setRestaurantToDisplay] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurantToDisplay, setFilteredRestaurantToDisplay] =
    useState([]);
  //on change in state variable React re-renders the whole component in Virtual DOM with constructing a new tree with updates, it will compare both the old and newly constructed tree (Diff algo) and then it will only update "changed part"(diffed) in actual DOM.

  //below useEffect callback is called after the component renders itself first time in actual DOM (see Header.js)
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!!! Please check your internet connection
      </h1>
    );

  return restaurantToDisplay.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className=" flex items-center">
          <input
            className="border border-black border-solid h-10 rounded-md ml-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="py-2 px-4 bg-green-100 m-4 rounded-lg"
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
          <button
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredList = restaurantToDisplay.filter(
                (restaurant) => restaurant?.info?.avgRating > 4.2
              );
              setFilteredRestaurantToDisplay(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
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
