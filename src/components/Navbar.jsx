import { CiHeart } from "react-icons/ci";
import { FiShoppingBag, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

import { useSelector } from "react-redux";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "New In", path: "/new" },
    { name: "Collections", path: "/collections" },
    { name: "Sale", path: "/sale" },
  ];

  const [isOpen, setIsOpen] = useState(false)

  const wishlistCount = useSelector((state)=> state.wishlist.wishlistItems).length
  const cartCount = useSelector((state)=> state.cart.cartItems).length

  return (
    <>
    <div className="flex justify-between items-center h-18 border-b w-full border-gray-200 lg:px-10 px-2  bg-soft-bg fixed z-10 top-0">
      <Link to="/"><h2 className="text-3xl  font-cormorant font-semibold relative">LUXE <span className="text-gold absolute -right-2">.</span></h2></Link>
      <nav className="hidden lg:flex gap-5 ml-60">
        {navItems.map((item) => (
          <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative pb-1 text-sm transition-colors duration-300 font-montserrat font-semibold'
          ${isActive ? "text-black" : "text-gray-500"}
          
          after:content-[''] after:absolute after:left-0 after:bottom-0
          after:h-0.5 after:bg-secondary-bg
          after:transition-all after:duration-300
          
          ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
        }
        >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="flex gap-8 items-center justify-center px-3">
        <SearchBar />
        <div className="flex gap-5 items-center justify-center">
          <span className="relative">
            <Link to="/wishlist">
            <CiHeart className="text-3xl cursor-pointer" />
            <span className="bg-gold absolute -top-1 -right-1 flex items-center justify-center h-4 w-4 rounded-full text-white text-xs text-bold ">{wishlistCount}</span>
            </Link>
          </span>
          <span className="relative">
            <Link to="/cart">
            <FiShoppingBag className="text-2xl  cursor-pointer "  />
            <span className="bg-gold absolute -top-2 -right-1 flex items-center justify-center h-4 w-4 rounded-full text-white text-xs text-bold ">{cartCount}</span>
            </Link>
          </span>
          <span className="bg-gold  rounded-full flex items-center justify-center h-8 w-8 ">
          <h1 className="text-white font-semibold ">R</h1>
          </span>
          <div className="text-3xl lg:hidden block cursor-pointer"
          onClick={()=>setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <RxHamburgerMenu />}
            </div>
        </div>
      </div>
    </div>

    {isOpen && (
      <div
  className="lg:hidden fixed top-18 left-0 w-full bg-white shadow-md 
  flex flex-col items-center gap-6 py-6 z-50 
  transform transition-transform duration-300"
>
  {navItems.map((item) => (
    <NavLink
      key={item.name}
      to={item.path}
      onClick={() => setIsOpen(false)} // close on click
      className={({ isActive }) =>
        `text-sm font-montserrat font-semibold ${
          isActive ? "text-black" : "text-gray-500"
        }`
      }
    >
      {item.name}
    </NavLink>
  ))}
</div>
    )}
    </>
  );
};

export default Navbar;
