import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart.cartItems);

  const shippingCost = 20;

  const subtotal = cartProducts.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const total = shippingCost + subtotal;

  return (
    <div className="bg-soft-bg min-h-[calc(100vh-64px)] overflow-x-hidden">

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">

        {cartProducts.length > 0 ? (
          <div className="flex flex-col gap-6 w-full lg:grid lg:grid-cols-3">

            {/* LEFT — PRODUCTS */}
            <div className="lg:col-span-2 flex flex-col gap-3 w-full min-w-0">
              {cartProducts.map((product) => (
                <CartProduct key={product.id} productData={product} />
              ))}
            </div>

            {/* RIGHT — ORDER SUMMARY */}
            <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-md
              lg:sticky lg:top-24 h-fit w-full">

              <h2 className="font-outfit font-semibold text-base sm:text-lg mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-3 text-sm sm:text-base text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-black">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between mb-3 text-sm sm:text-base text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-black">${shippingCost.toFixed(2)}</span>
              </div>

              <div className="flex justify-between font-semibold text-base sm:text-lg
                border-t border-gray-200 pt-3 mt-1">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Button
                text={"Proceed to Checkout"}
                classNames={"w-full mt-5 text-sm sm:text-base"}
              />

              <Link to="/shop">
                <button className="w-full mt-3 text-sm text-gray-500 
                  hover:text-black transition-colors font-outfit underline underline-offset-2">
                  Continue Shopping
                </button>
              </Link>

            </div>
          </div>

        ) : (
          <div className="flex items-center justify-center flex-col 
            text-center mt-20 px-4">

            <div className="text-6xl mb-4">🛒</div>

            <h1 className="font-outfit text-xl sm:text-2xl md:text-3xl font-semibold">
              Your Cart is Empty!
            </h1>

            <h2 className="font-outfit mt-2 text-gray-500 text-sm sm:text-base max-w-xs">
              Add something amazing to get started.
            </h2>

            <Link to="/shop">
              <Button text={"Shop Now"} classNames={"mt-6"} />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;