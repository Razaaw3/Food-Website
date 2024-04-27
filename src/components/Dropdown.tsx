"use client";
import { useState, useEffect, useRef } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center justify-between  px-8 ml-5 py-1 rounded cursor-pointer bg-white border border-green-500 shadow-md hover:bg-green-500 hover:text-white"
        onClick={toggleDropdown}
      >
        {selectedItem || "Select an item"}
        <RiArrowDownSLine
          className={`text-black ${
            isOpen ? "transform rotate-180" : ""
          } ml-auto`}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 top-full left-0 w-52 p-2 mt-1 bg-white border border-green-500 shadow-md rounded">
          <li>
            <a
              className="block px-3 py-1 text-black hover:bg-green-500 hover:text-white"
              href="#"
              onClick={() => setSelectedItem("Item 1")}
            >
              Item 1
            </a>
          </li>
          <li>
            <a
              className="block px-3 py-1 text-black hover:bg-green-500 hover:text-white"
              href="#"
              onClick={() => setSelectedItem("Item 2")}
            >
              Item 2
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
