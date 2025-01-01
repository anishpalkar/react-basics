import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = ({ resData }) => {
  const { name, costForTwo, cuisines, avgRating, cloudinaryImageId, sla, id } =
    resData?.info;
  return (
    <Link to={`restaurant/${id}`}>
      <div className="w-[240px] p-4 rounded-lg" style={styleCard}>
        <img
          className="w-56 h-56 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
