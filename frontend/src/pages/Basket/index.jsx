import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseCount,
  removeAllBasket,
  removeBasket,
  setBasket,
} from "../../redux/slice/clockSlice";

const Basket = () => {
  const basket = useSelector((state) => state.counter.basket);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="basket">
        <button onClick={() => dispatch(removeAllBasket([]))}>RemoveAll</button>
        {basket.map((product, index) => {
          return (
            <div className="basketmehsul" key={index}>
              <img src={product.image} alt="" />
              <p>{product.name}</p>
              <p>{product.price}</p>
              <button onClick={() => dispatch(decreaseCount(product))}>
                -
              </button>
              <button>{product.count}</button>
              <button onClick={() => dispatch(setBasket(product))}>+</button>
              <button onClick={() => dispatch(removeBasket(product))}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
