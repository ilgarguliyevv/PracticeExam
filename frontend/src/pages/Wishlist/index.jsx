import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasket } from "../../redux/slice/clockSlice";

const Wishlsit = () => {
  const favorite = useSelector((state) => state.counter.favorite);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="favorite">
        {favorite?.map((product, index) => {
          return (
            <div className="favorites">
              <img src={product.image} alt="" key={index} />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <button onClick={() => dispatch(setBasket(product))}>
                Add to Basket
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlsit;
