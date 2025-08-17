import { useState, useEffect } from "react";
const useBodyData = (RESTAURANT_API) => {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await fetch(RESTAURANT_API);
      const json = await data.json();
      const restaurants = json?.data?.cards
        ?.filter((card) => card?.card?.card?.info)
        .map((item) => item.card.card.info);
      setRestaurant(restaurants || []);
      setLoading(false);
    };
    fetchData();
  }, [RESTAURANT_API]);
  return { restaurant, loading };
};

export default useBodyData;
