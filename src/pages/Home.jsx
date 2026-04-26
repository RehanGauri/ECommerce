import React, { useEffect, useState } from "react";
import FeaturedProducts from "../sections/Home/FeaturedProducts";
import CategoryProducts from "../sections/Home/CategoryProducts";
import PromoBanner from "../sections/Home/PromoBanner";
import NewsLetter from "../sections/Home/NewsLetter";
import Footer from "../components/Footer";
import axios from "axios";
import TrendingNowProducts from "../sections/Home/TrendingNowProducts";
import Hero from "../sections/Home/Hero";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);

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
    if(featuredProducts.length === 0){

      
      const fetchProducts = async () => {
        
        const productRes = await axios.get("https://fakestoreapi.com/products");
        
        const mappedData = productRes.data.map((item) => {
          return {
            id: item.id,
            name: item.title,
            category: item.category,
            price: item.price,
            originalPrice: Math.floor(item.price * 1.2), // fake discount
            ratingStar: Math.round(item.rating.rate),
            rating: item.rating.count,
            imgUrl: item.image,
            
            // custom UI fields
            tag: getTag(item),
            tagColor: getTagColor(item),
          };
        });
        
        setFeaturedProducts(mappedData.slice(0, 4));
        setTrendingProducts(mappedData.slice(4, 8));
        console.log(productRes.data);
      };
      fetchProducts();
    }
    }, []);

  return (
    <>
      <Hero />
      <div className="bg-white">
        <div className="w-[95%] lg:w-[65%] mx-auto">
          <FeaturedProducts featuredProducts={featuredProducts} />
        </div>
      </div>

      <div className="bg-soft-bg">
        <div className="w-[95%] lg:w-[65%] mx-auto">
          <CategoryProducts />
        </div>
      </div>


      <div className="bg-white">
        <div className="w-[95%] lg:w-[65%] mx-auto">
          <PromoBanner />
        </div>
      </div>
      {/* <div className="bg-white">
        <div className="w-[95%] lg:w-[65%] mx-auto">
          <TrendingNowProducts trendingProducts={trendingProducts} />
        </div>
      </div> */}
      <div className="bg-soft-bg">
        <div className="w-[95%] lg:w-[65%] mx-auto">
          <NewsLetter />
        </div>
      </div>
      <div className="bg-black">
        <div className="w-[95%] lg:w-[65%] mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
