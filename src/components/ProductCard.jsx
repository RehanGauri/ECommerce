import React from "react";
import { FaHeart, FaPlus, FaRegHeart } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { addToCart } from "../features/cart/cartSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ productData }) => {
  const {
    name,
    category,
    ratingStar,
    rating,
    price,
    originalPrice,
    tag,
    tagColor,
    imgUrl,
  } = productData;

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
  const isInWishlist = wishlistItems.some(
    (item) => item.id === productData.id
  );

  const renderStars = (filled) => {
    return Array.from({ length: 5 }, (_, i) => (
      <IoStar key={i} className={i < filled ? "" : "text-gray-300"} />
    ));
  };

  return (
    <div
      className="w-full bg-main-bg border border-gray-300 rounded-3xl 
      overflow-hidden flex flex-col 
      hover:shadow-xl transition-all duration-300 group h-full"
    >
      {/* IMAGE */}
      <div className="relative bg-white flex items-center justify-center aspect-square p-4">
        <img
          src={imgUrl}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* TAG */}
        <div
          className={`absolute top-2 left-2 text-xs font-bold text-white px-3 py-1 rounded-lg ${tagColor}`}
        >
          {tag}
        </div>

        {/* WISHLIST */}
        <div
          className="absolute top-2 right-2 bg-main-bg border border-gray-300 p-2 rounded-full
          cursor-pointer opacity-100 lg:opacity-0 lg:translate-x-6 
          lg:group-hover:translate-x-0 lg:group-hover:opacity-100 transition-all"
          onClick={() => {
            dispatch(toggleWishlist(productData));
            isInWishlist
              ? toast.info("Removed from wishlist")
              : toast.success("Added to wishlist");
          }}
        >
          {isInWishlist ? (
            <FaHeart className="text-red-500 text-sm" />
          ) : (
            <FaRegHeart className="text-sm" />
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between p-3 sm:p-4 flex-1">

        {/* TEXT FIXED HEIGHT */}
        <div className="min-h-[60px]">
          <p className="text-xs text-gray-500">{category}</p>

          <h2 className="text-sm sm:text-base font-semibold text-main-text leading-snug line-clamp-2">
            {name}
          </h2>
        </div>

        {/* RATING */}
        <div className="flex items-center gap-1 text-xs sm:text-sm mt-2">
          <span className="flex">{renderStars(ratingStar)}</span>
          <span className="text-gray-500">({rating})</span>
        </div>

        {/* PRICE + CART */}
        <div className="mt-auto flex items-center justify-between pt-3">
          <div>
            <span className="font-bold text-base sm:text-lg">${price}</span>
            {originalPrice && (
              <span className="ml-1 text-xs sm:text-sm line-through text-gray-500">
                ${originalPrice}
              </span>
            )}
          </div>

          <button
            className="bg-black text-white p-2 sm:p-3 rounded-full 
            hover:bg-gold transition-all hover:scale-110"
            onClick={() => {
              dispatch(addToCart(productData));
              toast.success("Added to Cart");
            }}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;