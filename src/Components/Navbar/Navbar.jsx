import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';
import { FiShoppingBag } from 'react-icons/fi';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Womens Wear", link: "/womens-wear" },
  { id: 3, name: "Mens Wear", link: "/mens-wear" },
  { id: 4, name: "Kids Wear", link: "/kids-wear" },
  { id: 5, name: "Electronics", link: "/electronics" },
  { id: 6, name: "Cart", link: "/cart" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/trending-products" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/toprated" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { cartItems } = useCart();

  // Calculate total quantity of all items in the cart across categories
  const totalQuantity = Object.values(cartItems)
    .flat()
    .reduce((total, item) => total + item.quantity, 0);

  const handleOrderPopup = () => {
    navigate('/cart');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40'>
      <div className='bg-primary/40 py-2'>
        <div className='container flex justify-between items-center'>
          <div>
            <a href="#" className='font-bold text-xl text-white items-center flex gap-1'>
              <FiShoppingBag size="30" />
              ShopMe
            </a>
          </div>

          <div className='flex items-center gap-4'>
            <div className='relative group hidden sm:block'>
              <input
                type="text"
                placeholder='Search'
                className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800'
              />
              <IoMdSearch className='text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3' />
            </div>

            <button
              onClick={handleOrderPopup}
              className='bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
            >
              <span className='group-hover:block hidden transition-all duration-200'>Cart</span>
              <FiShoppingBag className='text-xl text-white drop-shadow-sm cursor-pointer' />
              {totalQuantity > 0 && (
                <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">{totalQuantity}</span>
              )}
            </button>

            <DarkMode />

            <button onClick={toggleMenu} className='sm:hidden text-white'>
              {isOpen ? <FaTimes size="24" /> : <FaBars size="24" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Links */}
      <div data-aos="zoom-in" className={`${isOpen ? 'block' : 'hidden'} sm:flex justify-center`}>
        <ul className='flex flex-col sm:flex-row items-center gap-4'>
          {Menu.map((data) => (
            <li key={data.id}>
              <NavLink
                to={data.link}
                className={({ isActive }) =>
                  `inline-block px-4 py-2 duration-200 ${isActive ? 'text-primary' : 'hover:text-primary'}`
                }
              >
                {data.name}
                {data.name === "Cart" && totalQuantity > 0 && (
                  <span className="ml-1 text-sm bg-red-500 text-white rounded-full px-2">{totalQuantity}</span>
                )}
              </NavLink>
            </li>
          ))}

          <li className='group relative cursor-pointer'>
            <a href="#" className='flex items-center gap-[2px] py-2'>
              Trending Products
              <span>
                <FaCaretDown className='transition-all duration-200 group-hover:rotate-180' />
              </span>
            </a>
            <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <NavLink
                      to={data.link}
                      className={({ isActive }) =>
                        `inline-block w-full rounded-md p-2 ${isActive ? 'bg-primary/20' : 'hover:bg-primary/20'}`
                      }
                    >
                      {data.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;