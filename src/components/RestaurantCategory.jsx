import { useState } from "react";
import Menulist from "./Menulist"

const RestaurantCategory = ({ data }) => {
    const [showItems, setShowItems] = useState(false); // Accordion formula
   const handleClick =()=>{
        setShowItems(!showItems);
    }
  return (
    <div className="flex justify-center my-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 transition hover:shadow-2xl">
        <div className="flex items-center justify-between cursor-pointer mb-4" onClick={handleClick}>
          <span className="font-bold text-lg text-emerald-700">
            {data.title} <span className="text-gray-500 font-normal">({data.itemCards.length})</span>
          </span>
          <span className="text-xl transition active:text-emerald-200 text-emerald-400">🔽</span>
        </div>
        <div>
         {showItems && <Menulist items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;