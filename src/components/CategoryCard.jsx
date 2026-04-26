import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryCard = ({ categoryData, isFirst , isLast}) => {
  const { name, products, imgUrl } = categoryData;

  return (
    <Link to="/shop" className="block h-full"> 

    <div
      className={`cursor-pointer h-full min-h-60 group rounded-3xl`} 
    >
      <div className="h-full w-full overflow-hidden rounded-3xl relative">
        <img
          src={imgUrl}
          alt={name}
          loading="lazy"
          className="object-cover object-top h-full w-full transition-all duration-500 group-hover:scale-105"
        />

        <div
          className="absolute top-5 right-5 bg-black/10 py-3 px-3 rounded-full
            translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 transition-all cursor-pointer"
        >
          <FaArrowRight className="text-lg text-white" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

        <div className="text-white absolute bottom-4 left-4">
          <h2 className="font-semibold text-2xl font-cormorant">{name}</h2>
          <h2 className="font-montserrat text-xs mt-1">{products} products</h2>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CategoryCard;