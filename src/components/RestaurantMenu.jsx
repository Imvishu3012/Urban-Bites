import Shimmer from "./Shimmer";
import { MENU_API } from "../utilities/constants";
import useRestaurantMenu from "./useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const { loading, name, categories } = useRestaurantMenu(MENU_API(resId));
  if (loading) return <Shimmer />;
  return (
    <>
      <div className="text-center w-full">
        <h1 className="text-3xl m-10  font-bold">{name}</h1>
        
        {categories.map((category) => (
          <RestaurantCategory key={category.card.card.title} data={category.card.card} />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
