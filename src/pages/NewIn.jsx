import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const NewIn = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");

      const mapped = res.data.map((item) => ({
        id: item.id,
        name: item.title,
        category: item.category,
        price: item.price,
        originalPrice: Math.floor(item.price * 1.2),
        ratingStar: Math.round(item.rating.rate),
        rating: item.rating.count,
        imgUrl: item.image,
        tag: "NEW",
        tagColor: "bg-black",
      }));

      setProducts(mapped.reverse()); 
    };

    fetchData();
  }, []);

  return (
    <div className="bg-soft-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-outfit">
          New Arrivals
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} productData={p} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default NewIn;