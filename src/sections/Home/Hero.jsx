import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">


        <div>


          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="w-2 h-2 bg-gold rounded-full"></span>
            New Collection 2026
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Dress for the <br />
            <em className="text-gold not-italic">Life You Want</em>
          </h1>


          <p className="text-gray-500 mt-4 text-sm sm:text-base max-w-md">
            Curated luxury essentials crafted for those who appreciate the
            finest things. Timeless design, exceptional quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => navigate("/shop")}
              className="bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gold transition"
            >
              Shop Now
            </button>

            <button
              onClick={() => navigate("/shop")}
              className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
            >
              Explore All
            </button>
          </div>


          <div className="flex gap-6 mt-8">
            <div>
              <h2 className="font-bold text-lg">12K+</h2>
              <p className="text-gray-500 text-sm">Products</p>
            </div>
            <div>
              <h2 className="font-bold text-lg">98%</h2>
              <p className="text-gray-500 text-sm">Satisfaction</p>
            </div>
            <div>
              <h2 className="font-bold text-lg">50+</h2>
              <p className="text-gray-500 text-sm">Brands</p>
            </div>
          </div>
        </div>


        <div className="relative flex justify-center">


          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80"
            alt="Hero"
            className="rounded-3xl w-full max-w-md lg:max-w-lg object-cover"
          />

          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>

 
          <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-xl p-3 flex items-center gap-3 w-48">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&q=80"
              alt="watch"
              className="w-10 h-10 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-sm font-semibold">Premium Watch</h3>
              <p className="text-gray-500 text-xs">$299.00</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;