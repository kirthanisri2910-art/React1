import React from "react";

function Card({ flower, onAdd }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl text-center">
      <img
        src={flower.image}
        alt={`${flower.name} flower`}
        className="w-32 h-32 mx-auto rounded-full mb-3 object-cover"
      />
      <h2 className="text-xl font-bold">{flower.name}</h2>
      <p className="text-green-600 font-semibold">₹{flower.price}</p>

      <button
        onClick={() => onAdd(flower)}
        className="mt-3 bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
