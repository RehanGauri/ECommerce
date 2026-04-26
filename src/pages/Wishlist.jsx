import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Wishlist = () => {
  const wishlistProducts = useSelector((state) => state.wishlist.wishlistItems);

  return (
    <div className="bg-soft-bg min-h-[calc(100vh-64px)] overflow-x-hidden">

      {/* CONTAINER */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6">

        {wishlistProducts.length > 0 ? (
          
          <div className="grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-4 
          gap-4 sm:gap-6">

            {wishlistProducts.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))}

          </div>

        ) : (
          <div className="flex items-center justify-center flex-col text-center mt-20 px-4">
            
            <h1 className="font-outfit text-xl sm:text-2xl md:text-3xl">
              Your Wishlist is Empty!
            </h1>

            <h2 className="font-montserrat mt-2 text-gray-500 text-sm sm:text-base">
              Tap the heart icon to save your favorite items.
            </h2>

            <Link to="/shop">
              <Button text={"Browse Products"} classNames={"mt-5"} />
            </Link>

          </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;