import React, { useEffect, useMemo, useState } from "react";
import ShopBanner from "../components/Shop/ShopBanner";
import FilterAside from "../components/Shop/FilterAside";
import ShopMain from "../components/Shop/ShopMain";
import axios from "axios";

const Shop = () => {

  const [selectedCategories, setSelectedCategories] = useState([
    "All Products",
  ]);

  // Filters
  const [selectedRating, setSelectedRating] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOption, setSortOption] = useState("recommended");

  const [products, setProducts] = useState([]);

  const getTag = (item) => {
    if (item.rating.rate >= 4.5) return "HOT";
    if (item.price < 100) return "SALE";
    return "NEW";
  };

  const getTagColor = (item) => {
    if (item.rating.rate >= 4.5) return "bg-gold";
    if (item.price < 100) return "bg-red-400";
    return "bg-black";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productRes = await axios.get("https://fakestoreapi.com/products");

      const mappedData = productRes.data.map((item) => {
        return {
          id: item.id,
          name: item.title,
          category: item.category,
          price: item.price,
          originalPrice: Math.floor(item.price * 1.2),
          ratingStar: Math.round(item.rating.rate),
          rating: item.rating.count,
          imgUrl: item.image,
          tag: getTag(item),
          tagColor: getTagColor(item),
        };
      });

      setProducts(mappedData);
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategories.includes("All Products") ||
        selectedCategories.includes(product.category);

      const ratingMatch =
        !selectedRating || product.ratingStar >= parseInt(selectedRating);

      const priceMatch =
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice);

      return categoryMatch && ratingMatch && priceMatch;
    });
  }, [products, selectedCategories, selectedRating, minPrice, maxPrice]);

  const sortedProducts = useMemo(() => {
    let sorted = [...filteredProducts];

    if (sortOption === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortOption === "top-rated") {
      sorted.sort((a, b) => b.ratingStar - a.ratingStar);
    }

    return sorted;
  }, [filteredProducts, sortOption]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;
  const totalPages = Math.ceil(sortedProducts.length / postPerPage);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  const currentProducts = sortedProducts.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories, selectedRating, minPrice, maxPrice]);

  return (
    <div>

      {/* Banner */}
      <div className="bg-second-bg">
        <ShopBanner />
      </div>

      {/* Main Section */}
      <div className="bg-soft-bg">
        <div className="w-[95%] lg:w-[65%] mx-auto flex flex-col lg:flex-row gap-6 py-6">

          {/* Sidebar */}
          <FilterAside
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />

          {/* Products */}
          <ShopMain
            products={currentProducts}
            sortOption={sortOption}
            setSortOption={setSortOption}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />

        </div>
      </div>
    </div>
  );
};

export default Shop;