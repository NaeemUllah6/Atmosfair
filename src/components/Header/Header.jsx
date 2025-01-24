'use client';
import { useEffect, useState } from "react";
import Image from 'next/image';
import Dropdown from "@/common/assets/images/dropdown.svg";
import HeaderAvatar from "@/common/assets/images/headerAvatar.svg";
import MainLogoDesktop from "@/common/assets/images/mianLogo.svg";
import MainLogoMobile from "@/common/assets/images/logoMobile.png";
import { FaBars, FaTimes } from 'react-icons/fa';
import Button from './button';
import Language from '@/common/assets/images/Language.svg'
import crossIcon from '@/common/assets/images/crossIcon.svg'
import HeroAccordion from '@/components/Header/Headeraccordion'
import Icons from '@/common/icons/index'
import USA from '@/common/assets/images/usflag.svg'
// import GER from '@/common/assets/images/germany.png'

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  const links = [
    {
      name: "Kompensieren", dropdown: ["Flug kompensieren", "CO₂-Eventrechner", "Wunschmenge CO₂ kompensieren", " Standards & Transparenz",]
    },
    {
      name: "Projekte", dropdown: ["Klimaschutzprojekte", "Projekt Auswahlverfahreny",]
    },
    {
      name: "Fliegen & Klima", dropdown: ["Flugverkehr & Klimalösungen", "atmosfair Airline Index",]
    },
    {
      name: "Grün reisen", dropdown: ["Smart Travel Tool (STT)", "Grüne Reiseveranstalter", "Nachhaltiger reisen", "Ihr persönliches Klimabudget",]
    },
    { name: "Businesslösungen", dropdown: ["Geschäftsreisen Reporting", "CO-kompensierte Veranstaltung", "Kompensation & Projektförderung"] },
    { name: "Über uns", dropdown: ["Was macht atmosfair", "atmosfair Team", "Andere über uns", 'Jahresberichte', 'Newsletter', 'Stellenangebote'] },
  ];

  const toggleProfileDropdown = () => {
    setProfileOpen(!profileOpen);
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [scroll, setscroll] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setscroll(true);
      }
      else {
        setscroll(false)
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  const [selectedLanguage, setSelectedLanguage] = useState({
    text: "DE",
    icon: Language, // Default icon
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    {
      text: "DE",
      icon: Language, // Replace with the actual import for DE icon
    },
    {
      text: "EN",
      icon: USA, // Replace with the actual import for USA icon
    },
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header className={`z-50 bg-white text-[#373940] h-[60px] md:h-[90px] flex items-center fixed top-0 w-full ${scroll ? 'shadow-lg transition-all duration-200' : 'bg-white'}`}>
      <div className="container">
        <nav className="flex justify-between items-center gap-4">
          {/* Logo */}
          <a className="hidden md:block" href="#">
            <Image width={135} height={50} src={MainLogoDesktop} alt="Main Logo" />
          </a>
          <a className="block md:hidden" href="#">
            <Image width={135} height={50} src={MainLogoMobile} alt="Main Logo" />
          </a>
          <div className="flex items-center gap-3">

            {/* Hamburger Icon */}
            <button
              className="lg:hidden text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Off-Canvas Menu */}
          <div
            className={`fixed top-0 right-0 h-full bg-white w-full shadow-lg z-50 transform transition-transform flex flex-col gap-2 justify-between ${menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
          >
            <div>
              <div className="flex border-b-[1px] items-center justify-between px-4">
                <div>
                  <Image height={40} width={108} src={MainLogoMobile} alt="logo" />
                </div>
                <div className="flex gap-3">
                  <div className="flex gap-3 items-center me-7">
                    {/* ------------------custom select---------------- */}
                    <div className="relative w-fit">
                      <input
                        type="text"
                        value={selectedLanguage.text}
                        placeholder="DE"
                        className="max-w-[68px] ps-[40px] border focus:outline-none h-[32px] border-gray-300 rounded-md"
                        onClick={toggleDropdown}
                        readOnly
                      />
                      <div className="absolute top-[6px] left-[6px]">
                        <Image src={selectedLanguage.icon} alt="icon" width={25} height={20} />
                      </div>
                      {/* Dropdown */}
                      {isDropdownOpen && (
                        <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
                          {languages.map((language, index) => (
                            <li
                              key={index}
                              className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                              onClick={() => handleLanguageSelect(language)}
                            >
                              <div className="flex items-center gap-1">
                                <Image
                                  width={25}
                                  height={20}
                                  src={language.icon}
                                  alt={language.text}
                                />
                                {language.text}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {/* ------------------custom select end---------------- */}
                    <div className="relative block lg:hidden">
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
                        {/* <Image width={10} height={5} src={Dropdown} alt="Dropdown1" /> */}
                      </button>
                      <ul
                        className={`absolute left-0 top-[50%] z-30 mt-12 bg-white text-slate-900 rounded w-56 shadow-lg ${profileOpen ? "block" : "hidden"
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


                      {/* <ul
                  className={`hidden md:block absolute right-0 mt-2 bg-white text-slate-900 rounded w-56 shadow-lg ${profileOpen ? "block" : "hidden"
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
                </ul> */}
                    </div>
                  </div>
                  <button
                    className="absolute top-4 right-4 text-2xl"
                    onClick={toggleMenu}
                    aria-label="Close Menu"
                  >
                    <Image src={crossIcon} alt="crossIcon" />
                  </button>
                </div>
              </div>
              <HeroAccordion />
              {/* </div>
            <div className="px-4"> */}
              <div className="px-4 mt-4">
                <Button className=" w-full mb-4 flex items-center lg:hidden justify-center py-4 bg-[#D06735] text-white px-5 rounded-[10px] font-[600] font-lato hover:bg-[#C0CF32] " ButtonText="Donate" />
              </div>
            </div>
          </div>

          {/* Navigation Links (Visible for large screens) */}
          <ul className="hidden lg:flex justify-between items-center space-x-[18px]">
            {
              links.map((link, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-[2px] h-[90px]">
                    <a href="#" className="text-base headerLinks font-lato font-normal whitespace-nowrap">
                      {link.name}
                    </a>
                    <Icons.chevronDown />

                  </div>
                  <ul
                    className={`absolute z-50 left-0  mt-[0px] shadow-custom-all text-dark  rounded-[20px] transition-opacity whitespace-nowrap ${openDropdown === index
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                      }`}
                  >
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className={` px-4 py-2  bg-white   hover:bg-[#F1F1F1] ${i + 1 === link.dropdown.length ? 'rounded-b-lg' : ''} ${i === 2 ? '' : ''}`}
                      >
                        <a href="#" className="block text-sm font-lato">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

              ))}
          </ul>
          <ul className="hidden lg:flex justify-between items-center space-x-[18px]">
            {/* Profile Icon and Button */}
            <li>
              <Button className=" transition-all duration-200 hover:bg-[#C0CF32] hover:text-black text-white   px-5 rounded-[10px] font-[600] font-lato bg-[#D06735]" ButtonText="Donate" />
            </li>
            <li>
              {/* ------------------custom select---------------- */}
              <div className="relative w-fit">
                <input
                  type="text"
                  value={selectedLanguage.text}
                  placeholder="DE"
                  className="max-w-[68px] ps-[40px] border focus:outline-none h-[32px] border-gray-300 rounded-md"
                  onClick={toggleDropdown}
                  readOnly
                />
                <div className="absolute top-[8px] left-[6px]">
                  <Image src={selectedLanguage.icon} alt="icon" width={23} height={22} />
                </div>
                {/* Dropdown */}
                {isDropdownOpen && (
                  <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md z-10">
                    {languages.map((language, index) => (
                      <li
                        key={index}
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleLanguageSelect(language)}
                      >
                        <div className="flex items-center gap-1">
                          <Image
                            width={20}
                            height={20}
                            src={language.icon}
                            alt={language.text}
                          />
                          {language.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {/* ------------------custom select---------------- */}
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
                <Image width={10} height={5} src={Dropdown} alt="Dropdown3" />
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

















