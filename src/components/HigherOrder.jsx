export const withPromotedLabel = (RestaurantCart) => {
  return function Promoted(props) {
    return (
      <div>
        <label className="font-bold absolute bg-black text-white rounded-r-xl px-2 mt-7 ml-9 ">
          Promoted
        </label>
        <RestaurantCart {...props} />
      </div>
    );
  };
};
