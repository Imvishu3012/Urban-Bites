import RestaurantCart from "./RestaurantCart";
import { useState, useEffect } from "react";
// import { RestaurantData } from "../utilities/RestaurantData";
import { RESTAURANT_API } from "../utilities/constants";
import Shimmer from "./Shimmer";
import useBodyData from "./useBody";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { withPromotedLabel } from "./HigherOrder";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [data, setData] = useState("");
   const {restaurant, loading }  = useBodyData(RESTAURANT_API)
  const [Loading, setLoading] = useState(false);
  const [allRestaurant, setAllRestaurants] = useState([]);

  const PromotedRestaurant = withPromotedLabel(RestaurantCart);

  useEffect(()=>{
    setRestaurantData(restaurant)
    setAllRestaurants(restaurant)
  },[restaurant])

  
  
  const Online = useOnlineStatus();
 if(Online === false) return (<h1 className="flex ">You are currently Offline!!!</h1>)

   if(loading) return <Shimmer/>
  const filter = () => {
    setLoading(true);
    setTimeout(() => {
      const filteredData = allRestaurant.filter((restaurant) => {
        return restaurant.avgRating > 4.3;
      });
      setRestaurantData(filteredData);
      setLoading(false);
    }, 1000);
  };
 


  return (
    <>
      <div>
        <div className="flex items-center gap-2 m-5">
          <input
            type="text"
            placeholder="Search restaurants..."
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
            // value={searchText}
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-emerald-400 text-white rounded-lg font-semibold cursor-pointer hover:bg-emerald-500 transition-all"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                const SearchData = allRestaurant.filter((restaurant) =>
                  restaurant.name
                    .toLowerCase()
                    .includes(data.toLowerCase())
                );
                setRestaurantData(SearchData);
                setLoading(false);
              }, 1000);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={filter}
          className="px-6 py-2 text-lg font-semibold m-5 hover:cursor-pointer rounded-lg shadow-md bg-emerald-400 text-white hover:bg-emerald-500 hover:shadow-lg transition-all duration-200"
        >
          Top Rated
        </button>
      </div>
      {Loading ? (
        <Shimmer />
      ) : (
        <div className="flex flex-wrap justify-center gap-6 w-full min-h-screen py-8 bg-slate-100">
          {restaurantData.filter(r => r && r.id && r.name ).map((restaurant) => (
            
             <Link to = {`/restaurant/${restaurant.id}`}  key={restaurant.id}>
              {restaurant.promoted ? <PromotedRestaurant data={restaurant}/> :
              <RestaurantCart
                data={restaurant} />}
                </Link>
              
            
          ))}
        </div>
      )}
    </>
  );
};

export default Body;
