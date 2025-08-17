import React from "react";
import { BASE_URL } from "../utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utilities/cartSlice";
const Menulist = ({ items }) => {
       const dispatch = useDispatch();
       const CartItems = useSelector((store)=> store.cart.items)
       const getInfo = (item)=>{
        return item.card?.info || item;
       }
  const handleAddItem = (item)=>{
      dispatch(addItem(getInfo(item)))

  }
   const getItemCount = (id)=>{
    return CartItems.filter((cartItem)=> cartItem.id === id).length;
   }
  return (
    <div>
      {items.map((item) =>{const info = getInfo(item); return (
        <div
          className="border-b-2 p-2 m-2 shadow-lg text-left flex justify-between border-gray-400 font-sans"
          key={info.id}
        >
          {" "}
          <div className="w-9/12">
            <div className="text-gray-800 font-bold">
              <span>{info.name} </span>
              <br />₹
              <span>
                {info.price / 100 || info.defaultPrice}
              </span>
            </div>
            <p className="text-sm">{info.description}</p>
          </div>
          <div className="w-3/12 p-4 cursor-pointer">
            <div className="absolute flex justify-self-end">
              <button onClick={()=>handleAddItem(item)} className=" px-4 py-1 rounded-full cursor-pointer bg-emerald-500 text-white font-semibold shadow hover:bg-emerald-600 transition">
                Add +({getItemCount(info.id)})
              </button>
            </div>
            <img
              className="w-full"
              src={BASE_URL + info.imageId}
              alt={info.name}
            />
          </div>
        </div>
      )})}
    </div>
     );
};

export default Menulist;
