import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"

export function TextboxSimple({ label, value, setValue, size, mode, placeholder, icon, width, onChange,important }) {

    const [sizeState, setSizeState] = useState(size ? size : "md");
    const [modeState, setModeState] = useState(mode ? mode : "light");


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
        // <div className="bg-transparent">
            <div className={`${width || "max-w-md"} mx-auto`}>
                {label &&
                    <label htmlFor="select" className={`${getFontSize(sizeState)} ${modeState === "light" ? "text-gray-800" : "text-white"} font-semibold block py-1 pl-1`}>{label}{important && "*"}</label>
                }
                <div className={`relative ${getHeight(sizeState)} bg-white flex border-[1.5px] border-gray-400 rounded-[4px] items-center`}>
                    <input value={value} className={`pl-2 appearance-none outline-none text-gray-800 w-full ${icon ? "pr-7" : "pr-2"}`}
                        placeholder={placeholder ? placeholder : ""}
                        onChange={onChange ? onChange :(e) => { setValue(e.target.value) }}
                    />
                    {icon && value && !onChange !== "" &&
                        <button type="button" className={`cursor-pointer outline-none text-gray-900 hover:text-gray-700 absolute right-1 top-1/2 -translate-y-1/2`} onClick={() => {
                            setValue("")
                        }}>
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    }
                </div>
            </div>
        // </div>
    );
}

export default TextboxSimple;