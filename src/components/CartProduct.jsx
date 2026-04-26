import React from "react";
import { IoStar } from "react-icons/io5";
import {
  addToCart,
  clearQuantity,
  decreaseQty,
  increseQty,
} from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartProduct = ({ productData }) => {
  const { name, category, rating, price, originalPrice, imgUrl, quantity } =
    productData;

  const dispatch = useDispatch();

  return (
    <div className="w-full border border-gray-300 rounded-3xl bg-main-bg relative group hover:scale-[1.01] duration-500 transition-all hover:shadow-2xl">
      <button
        className="absolute top-3 right-3 z-10"
        onClick={() => dispatch(clearQuantity(productData.id))}
      >
        <IoMdClose className="text-2xl text-gray-400 hover:text-red-400 cursor-pointer" />
      </button>


      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        <div
          className="overflow-hidden rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none 
          sm:rounded-bl-3xl w-full sm:w-44 sm:h-44 md:w-48 md:h-48 shrink-0"
        >
          <img
            src={imgUrl}
            alt={name}
            loading="lazy"
            className="w-full h-48 sm:h-full object-contain p-4 
              transition-all duration-500 group-hover:scale-105"
          />
        </div>


        <div className="flex flex-col sm:flex-row flex-1 min-w-0 p-4 sm:p-5 gap-4">

          <div className="flex flex-col justify-between flex-1 min-w-0">
            <div>
              <h2>
                {name
                  ? name.length > 52
                    ? name.slice(0, 52) + "..."
                    : name
                  : "No Name"}
              </h2>
              <h2 className="text-sm font-sans font-semibold text-gray-500 mt-1">
                {category}
              </h2>
            </div>

            <div className="mt-3">
              <span className="flex items-center gap-0.5 text-yellow-400">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <span className="text-sm ml-1 text-gray-500">({rating.rate})</span>
              </span>
              <div className="mt-2">
                <span className="font-bold text-lg sm:text-xl">${price}</span>
                {originalPrice && (
                  <span className="ml-2 line-through text-gray-400 font-semibold text-sm">
                    ${originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>


          <div
            className="flex sm:flex-col items-center sm:items-end justify-between 
            sm:justify-center gap-4 sm:gap-6 sm:pr-8"
          >

            <div className="flex items-center gap-2">
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg 
                  border border-gray-400 bg-white hover:bg-gray-100 transition cursor-pointer"
                onClick={() => dispatch(decreaseQty(productData.id))}
              >
                <FiMinus />
              </button>
              <h1 className="text-lg font-semibold w-6 text-center">
                {quantity}
              </h1>
              <button
                className="w-8 h-8 flex items-center justify-center rounded-lg 
                  border border-gray-400 bg-white hover:bg-gray-100 transition cursor-pointer"
                onClick={() => dispatch(increseQty(productData.id))}
              >
                <FiPlus />
              </button>
            </div>

            <span className="font-bold text-lg sm:text-xl whitespace-nowrap">
              ${(price * quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
