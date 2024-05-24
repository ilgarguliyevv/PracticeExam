import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setBasket, setFavorites } from "../../redux/slice/clockSlice";

const Home = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3000/clock")
      .then((response) => setProducts(response.data))
      .catch((error) => {
        "Error", error;
      });
  });

  return (
    <div>
      <div className="clock">
        {products?.map((product, index) => (
          <div
            // onClick={() => navigate(`detail/${product._id}`)}
            className="clocks"
            key={index}
          >
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <button onClick={() => dispatch(setBasket(product))}>Basket</button>
            <button onClick={() => dispatch(setFavorites(product))}>
              Favorite
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
