import React from "react";
import { IoStarSharp } from "react-icons/io5";

const FilterAside = ({
  selectedCategories,
  setSelectedCategories,
  selectedRating,
  setSelectedRating,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  const categories = [
    "All Products",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const ratings = [
    {
      rating: "5 stars",
      value: 5,
      icon: [0, 1, 2, 3, 4].map((i) => <IoStarSharp key={i} />),
    },
    {
      rating: "4+ stars",
      value: 4,
      icon: [0, 1, 2, 3]
        .map((i) => <IoStarSharp key={i} />)
        .concat(<IoStarSharp key={4} className="text-gray-400" />),
    },
    {
      rating: "3+ stars",
      value: 3,
      icon: [0, 1, 2]
        .map((i) => <IoStarSharp key={i} />)
        .concat(
          [3, 4].map((i) => (
            <IoStarSharp key={i} className="text-gray-400" />
          ))
        ),
    },
  ];

  const handleCategory = (category) => {
    if (category === "All Products") {
      setSelectedCategories(["All Products"]);
    } else {
      let updated;

      if (selectedCategories.includes(category)) {
        updated = selectedCategories.filter((item) => item !== category);
      } else {
        updated = [
          ...selectedCategories.filter((item) => item !== "All Products"),
          category,
        ];
      }

      if (updated.length === 0) {
        updated = ["All Products"];
      }

      setSelectedCategories(updated);
    }
  };

  const handleRating = (rating) => {
    setSelectedRating(rating === selectedRating ? null : rating);
  };

  const clearAllButton = () => {
    setSelectedCategories(["All Products"]);
    setSelectedRating(null);
    setMinPrice("");
    setMaxPrice("");
  };

  return (
    <div className="w-full lg:w-70 py-6 px-4 lg:px-0">
      {/* Header */}
      <div className="flex justify-between">
        <h2 className="font-bold font-outfit">Filters</h2>
        <h2
          className="text-gold text-sm cursor-pointer hover:bg-black/3 px-2 font-semibold font-outfit"
          onClick={clearAllButton}
        >
          Clear All
        </h2>
      </div>

      {/* Category */}
      <div className="py-6 border-b border-gray-200">
        <h1 className="font-outfit text-sm pb-3 font-semibold text-gray-text">
          CATEGORY
        </h1>

        {categories.map((item) => (
          <div
            key={item}
            className="flex items-center justify-between py-1"
          >
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(item)}
                onChange={() => handleCategory(item)}
                className="accent-gold w-4 h-4"
              />
              <span className="font-outfit text-sm">{item}</span>
            </label>
            <span className="text-gray-text text-sm">1299</span>
          </div>
        ))}
      </div>

      {/* Price */}
      <div className="py-6 border-b border-gray-200">
        <h1 className="font-outfit text-sm pb-3 font-semibold text-gray-text">
          PRICE RANGE
        </h1>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(e.target.value ? Number(e.target.value) : "")
            }
            className="border-2 rounded-xl px-4 py-2 text-sm w-full"
          />

          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : "")
            }
            className="border-2 rounded-xl px-4 py-2 text-sm w-full"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="py-6">
        <h1 className="font-outfit text-sm pb-3 font-semibold text-gray-text">
          RATING
        </h1>

        <div className="flex flex-col gap-1">
          {ratings.map((rating, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 px-2 py-1 hover:bg-black/3 cursor-pointer"
            >
              <input
                type="radio"
                className="accent-gold"
                checked={selectedRating === rating.value}
                onChange={() => handleRating(rating.value)}
              />
              <span className="flex items-center text-sm">
                {rating.icon}
                <span className="ml-2">{rating.rating}</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterAside;