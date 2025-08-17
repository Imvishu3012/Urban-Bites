import { useState, useEffect } from "react";
const useRestaurantMenu = (MENU_API) => {
  const [mainData, setMainData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(MENU_API);
      const json = await data.json();
      const restaurants =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards
          ?.filter((item) => item.card.info)
          .map((item) => item.card.info);

         const categoriesData = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> item.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        
         setCategories(categoriesData )

      const cardsArray = json?.data?.cards || [];
      const names = cardsArray
        .filter((item) => item?.card?.card?.info?.name)
        .map((item) => item.card.card.info.name);

      setMainData(restaurants);
      setLoading(false);
      setName(names);
    };
    fetchData();
  }, [MENU_API]);
  return { mainData, loading, name, categories };
};
export default useRestaurantMenu;
