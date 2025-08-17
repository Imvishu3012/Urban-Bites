import { BASE_URL } from "../utilities/constants";
const RestaurantCart = ({ data}) => {
  const { name, avgRating, cuisines, costForTwo, sla, cloudinaryImageId } = data;
  return (
    <div className="w-64 h-90 m-4 p-4 rounded-lg shadow-lg hover:cursor-pointer hover:border-2 hover:border-cyan-400 bg-zinc-100 transition-all duration-0 ease-in-out">
      
      <img
        className="w-full object-cover mt-2 rounded-lg h-1/2 p-1"
        src={BASE_URL + cloudinaryImageId}
        alt="Burger"
      />
      <h3 className="font-bold"> {name}</h3>
      <p>Rating: {avgRating} </p>
      <p>{cuisines.join(', ')}</p>
      <p>Cost For Two: {costForTwo}</p>
     <p>Delivery Time: {sla?.deliveryTime} mins</p>
    </div>
  );
};

//YOu can use higher order components here

export default RestaurantCart;

