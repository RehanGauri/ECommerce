import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoStar } from "react-icons/io5";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);

  const isInWishlist = wishlistItems.some(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center py-20">Loading...</div>;
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <IoStar
        key={i}
        className={i < Math.round(rating) ? "" : "text-gray-300"}
      />
    ));
  };

  // ✅ mapped product (important)
  const mappedProduct = {
    id: product.id,
    name: product.title,
    category: product.category,
    price: product.price,
    originalPrice: Math.floor(product.price * 1.2),
    rating: product.rating.count,
    ratingStar: Math.round(product.rating.rate),
    imgUrl: product.image,
    quantity: 1,
  };

  return (
    <div className="bg-soft-bg min-h-screen px-4 sm:px-6 lg:px-0 py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-md grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-60 h-60 sm:w-80 sm:h-80 object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="flex flex-col justify-between">

          <div>
            <h2 className="text-sm text-gray-500 capitalize">
              {product.category}
            </h2>

            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2">
              {product.title}
            </h1>

            {/* RATING */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex">{renderStars(product.rating.rate)}</div>
              <span className="text-gray-500 text-sm">
                ({product.rating.count})
              </span>
            </div>

            {/* PRICE */}
            <div className="mt-5">
              <span className="text-2xl font-bold">${product.price}</span>
            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-600 mt-5 text-sm sm:text-base">
              {product.description}
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8 flex-wrap">

            {/* ADD TO CART */}
            <button
              className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gold transition-all"
              onClick={() => {
                dispatch(addToCart(mappedProduct));
                toast.success("Added to Cart");
              }}
            >
              Add to Cart
            </button>

            {/* WISHLIST */}
            <button
              className={`flex items-center justify-center gap-2 px-5 py-3 rounded-xl border transition-all 
                ${isInWishlist 
                  ? "bg-red-50 border-red-300 text-red-500" 
                  : "bg-white border-gray-300 text-black hover:bg-gray-100"
                }`}
              onClick={() => {
                dispatch(toggleWishlist(mappedProduct));
                isInWishlist
                  ? toast.info("Removed from wishlist")
                  : toast.success("Added to wishlist");
              }}
            >
              {isInWishlist ? <FaHeart /> : <FaRegHeart />}
              Wishlist
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;