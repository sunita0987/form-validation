import { useParams } from "react-router-dom";
import React from "react";
const Product = () => {
  const  { id } = useParams();
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold text-fuchsia-600">Product Page</h2>
      <p className="mt-4 text-lg text-sky-800">
        You are viewing product with ID:
        <span className="font-bold text-blue-700">{id}</span>
      </p>
    </div>
  );
};
export default Product;