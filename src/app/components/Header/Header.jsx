'use client';
import { useState } from "react";
import Image from 'next/image';
import Dropdown from "@/assets/images/dropdown.svg";
import HeaderAvatar from "@/assets/images/headerAvatar.svg";
import MainLogo from "@/assets/images/mianLogo.svg";
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './button';

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

  const links = [
    { name: "Kompensieren", dropdown: ["Option 1", "Option 2", "Option 3"] },
    { name: "Projekte", dropdown: ["Team", "History", "Vision"] },
    { name: "Fliegen & Klima", dropdown: ["Web Design", "SEO", "Marketing"] },
    { name: "Grün reisen", dropdown: ["Projects", "Gallery", "Clients"] },
    { name: "Businesslösungen", dropdown: ["Email", "Phone", "Support"] },
    { name: "Über uns", dropdown: ["Email", "Phone", "Support"] },
  ];

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="z-10 bg-white text-[#373940] h-[90px] flex items-center fixed top-0 w-full">
      <div className="container">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <a href="#">
            <Image width={135} height={50} src={MainLogo} alt="Main Logo" />
          </a>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Off-Canvas Menu */}
          <div
            className={`fixed top-0 right-0 h-full bg-white w-64 shadow-lg z-50 transform transition-transform ${menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <FaTimes />
            </button>
            <ul className="mt-16 space-y-4 px-6">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-1">
                    <a href="#" className="text-base font-lato">
                      {link.name}
                    </a>
                    <Image width={10} height={5} src={Dropdown} alt="Dropdown" />
                  </div>
                  <ul
                    className={`absolute  left-0 mt-2 z-50 bg-white text-slate-800 rounded-[20px] shadow-custom-all transition-opacity ${openDropdown === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                      }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className="px-4 py-2 bg-white border hover:bg-[#F1F1F1]"
                      >
                        <a href="#" className="block text-base font-lato">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              {/* Profile Icon and Button */}
              <li>
                <Button className=" bg-[#D06735] text-white px-5 rounded-[10px] font-[600] font-lato" ButtonText="Donate" />
              </li>
              <li className="relative">
                <button
                  onClick={toggleProfileDropdown}
                  className="flex items-center space-x-2"
                >
                  <Image
                    src={HeaderAvatar}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <Image width={10} height={5} src={Dropdown} alt="Dropdown" />
                </button>
                <ul
                  className={`absolute right-0 mt-2 bg-white text-slate-900 rounded w-56 shadow-lg ${profileOpen ? "block" : "hidden"
                    }`}
                >
                  <li className="px-4 py-2 ">
                    <a href="#">Profile</a>
                  </li>
                  <li className="px-4 py-2 ">
                    <a href="#">Settings</a>
                  </li>
                  <li className="px-4 py-2 ">
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Navigation Links (Visible for large screens) */}
          <ul className="hidden lg:flex items-center space-x-6">
            {links.map((link, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1 h-[90px]">
                  <a href="#" className="text-base font-lato">
                    {link.name}
                  </a>
                  <Image width={10} height={5} src={Dropdown} alt="Dropdown" />
                </div>
                <ul
                  className={`absolute z-50 left-0 w-32 mt-[0px] shadow-custom-all text-dark  rounded-[20px] transition-opacity ${openDropdown === index
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
                >
                  {link.dropdown.map((item, i) => (
                    <li
                      key={i}
                      className={` px-4 py-2  bg-white   hover:bg-[#F1F1F1] ${i === 0 ? 'rounded-t-lgl' : ''} ${i === 2 ? 'rounded-b-lg' : ''}`}
                    >
                      <a href="#" className="block text-base font-lato">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            {/* Profile Icon and Button */}
            <li>
              <Button className=" hover:bg-blue-700 hover:text-white text-white   px-5 rounded-[10px] font-[600] font-lato bg-[#D06735]" ButtonText="Donate" />
            </li>
            <li className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="flex items-center space-x-2"
              >
                <Image
                  src={HeaderAvatar}
                  alt="Profile"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <Image width={10} height={5} src={Dropdown} alt="Dropdown" />
              </button>
              <ul
                className={`absolute right-0 mt-2 bg-white text-slate-900 rounded shadow-lg ${profileOpen ? "block" : "hidden"
                  }`}
              >
                <li className="px-4 py-2 ">
                  <a href="#">Profile</a>
                </li>
                <li className="px-4 py-2 ">
                  <a href="#">Settings</a>
                </li>
                <li className="px-4 py-2 ">
                  <a href="#">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
