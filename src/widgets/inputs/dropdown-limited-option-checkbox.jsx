import { useMemo, useState } from "react";
import PropTypes from "prop-types";

export function DropdownSimpleCheckbox({ label, options, value, groupValue, setGroupValue, allGroupValue, size, mode }) {

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [sizeState] = useState(size ? size : "md");
  const [modeState] = useState(mode ? mode : "light");
  const [selectAll, setSelectAll] = useState(false);

  console.log(allGroupValue);
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

  const manupulateValues = (event, id) => {
    if (event.target.checked) {
      let tempArr = JSON.parse(JSON.stringify((groupValue)))
      tempArr.push(id)
      setGroupValue(tempArr);
    } else {
      setGroupValue(groupValue.filter((item) => item !== id));
      setSelectAll(false);
    }
  }

  useMemo(() => {
    if (selectAll) {
      setGroupValue(allGroupValue.filter((item) => item));
    }
  }, [selectAll]);

  return (
    <div className="bg-transparent">
      <div className="max-w-md mx-auto">
        <label htmlFor="select" className={`${getFontSize(sizeState)} ${modeState === "light" ? "text-gray-800" : "text-white"} font-semibold block py-1 pl-1`}>{label}</label>

        <div className="relative">
          <div className={`${getHeight(sizeState)} bg-white flex border border-gray-300 rounded-lg items-center`}>
            <input value={value} name="select" id="select" className="px-4 appearance-none outline-none text-gray-800 font-medium w-full cursor-pointer" onClick={() => setDropDownOpen(true)}
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

              <div className="group">

                <label className={`${getFontSize(sizeState)} p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100 text-black capitalize flex justify-between cursor-pointer`}
                >
                  <span htmlFor="options" className="font-medium">
                    {"Select all"}
                  </span>

                  <div>
                    <input type="checkbox" name="options" id="options" className="cursor-pointer" onChange={(e) => { e.target.checked ? setSelectAll(true) : setSelectAll(false) }} checked={selectAll} />
                  </div>
                </label>

              </div>

              {
                options?.map((item) => (
                  <div className={`group border-t`} key={item.id}>

                    <label className={`${getFontSize(sizeState)} p-2 border-transparent border-l-4 group-hover:border-blue-600 group-hover:bg-gray-100 text-black capitalize flex justify-between cursor-pointer`}
                    >
                      <span htmlFor="options">
                        {item.name}
                      </span>

                      <div>
                        <input type="checkbox" name="options" id="options" className="cursor-pointer" onChange={(e) => { manupulateValues(e, item.id) }} checked={groupValue.includes(item.id)} />
                      </div>
                    </label>



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

export default DropdownSimpleCheckbox;