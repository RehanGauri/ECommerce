import React from "react";
import { Link } from "react-router-dom";

const collections = [
  { name: "Men", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg23IpmVFhLj4OCsUJsYpBtHe5WZ2UlcVRufaZIkmmdg&s" },
  { name: "Women", img: "https://5.imimg.com/data5/EI/RS/UL/SELLER-51767320/party-wear-western-dress.jpg" },
  { name: "Accessories", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { name: "Electronics", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1201&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Collections = () => {
  return (
    <div className="bg-soft-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
          Collections
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((item, i) => (
              <Link to="/shop" key={i}>  
            <div

              className="relative rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h2 className="text-white text-xl font-bold">
                  {item.name}
                </h2>
              </div>
            </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Collections;