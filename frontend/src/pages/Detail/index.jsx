import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/clock/${id}`)
      .then((response) => setProducts(response.data))
      .catch((error) => {
        "Error", error;
      });
  }, [id]);
  return (
    <div>
      <div className="detail">
        <div className="details">
          <img src={product.image} alt="" />
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
