import React from "react";
import ProductCard from "../ProductCard";

const ShopMain = ({
  products,
  sortOption,
  setSortOption,
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  return (
    <div className="w-full py-6 px-4 lg:pl-3">

      {/* Top bar */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 sm:items-center">


        <select
          className="border rounded px-4 py-2 bg-white text-sm w-full sm:w-auto"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="recommended">Sort: Recommended</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="top-rated">Top Rated</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border ${
              currentPage === i + 1 ? "bg-black text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

    </div>
  );
};

export default ShopMain;