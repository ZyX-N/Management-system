import { useState } from "react";
import PropTypes from "prop-types";

export function DropdownSimple({ label, options, value, setValue, size, mode }) {

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [sizeState] = useState(size ? size : "md");
  const [modeState] = useState(mode ? mode : "light");


  const fontSize = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
  }

  const heights = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12",
  }

  const getFontSize = (sizeName) => {
    switch (sizeName) {
      case "sm": return fontSize.sm
      case "md": return fontSize.md
      case "lg": return fontSize.lg
      default: return fontSize.md
    }
  }

  const getHeight = (sizeName) => {
    switch (sizeName) {
      case "sm": return heights.sm
      case "md": return heights.md
      case "lg": return heights.lg
      default: return heights.md
    }
  }

  return (
    <div className="bg-transparent">
      <div className="max-w-md mx-auto">
        <label htmlFor="select" className={`${getFontSize(sizeState)} ${modeState === "light" ? "text-gray-800" : "text-white"} font-semibold block py-1 pl-1`}>{label}</label>

        <div className="relative">
          <div className={`${getHeight(sizeState)} bg-white flex border-[1.5px] border-gray-400 rounded-[4px] items-center`}>
            <input value={value} name="select" id="select" className={`px-4 appearance-none outline-none text-gray-800 w-full cursor-pointer`} onClick={() => setDropDownOpen(true)}
              onChange={() => { setValue(value) }}
            />

            <button type="button" className={`cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600 duration-300 ${dropDownOpen ? "rotate-0" : "rotate-180"}`} onClick={() => {
              dropDownOpen ? setDropDownOpen(false) : setDropDownOpen(true);
            }}>
              <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>

          </div>

          {dropDownOpen &&
            <div className="absolute rounded-md shadow bg-white overflow-hidden flex flex-col w-full mt-1 border border-gray-200 z-40">
              {
                options?.map((item, idx) => (
                  <div className={`cursor-pointer group ${idx !== 0 ? "border-t" : ""}`}>
                    <div className={`${getFontSize(sizeState)} block p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100 text-black`} onClick={() => {
                      setValue(item.value);
                      setDropDownOpen(false);
                    }} >{item.name}</div>
                  </div>
                ))
              }

            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default DropdownSimple;