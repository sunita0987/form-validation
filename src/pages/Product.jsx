import { useParams } from "react-router-dom";
import React from "react";
const Product = () => {
  const { id } = useParams();
  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold text-fuchsia-600">Product Page</h2>
      <p className="mt-4 text-lg text-sky-800">
        You are viewing product with ID:
        <span className="font-bold text-blue-700">{id}</span>
      </p>
      <p className="mt-2 text-lg text-indigo-600">
        This product is a great choice for your needs.
      </p>
      <p className="mt-2 text-lg text-indigo-600">
        Explore more details and features of this product.
      </p>
      <p className="mt-2 text-lg text-indigo-600">
        Feel free to add it to your cart or wishlist.
      </p>
      <p className="mt-2 text-lg text-indigo-600">
        Happy shopping and enjoy your experience!
      </p>
      <p className="mt-2 text-lg text-indigo-600">
        Thank you for visiting our product page.
      </p>
    </div>
  );
};
export default Product;
