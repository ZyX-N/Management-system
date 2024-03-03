import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"

export function TextAreaSimple({ label, value, setValue, size, mode, placeholder, icon }) {

    const [sizeState, setSizeState] = useState(size ? size : "md");
    const [modeState, setModeState] = useState(mode ? mode : "light");

    const fontSize = {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
    }

    const getFontSize = (sizeName) => {
        switch (sizeName) {
            case "sm": return fontSize.sm
            case "md": return fontSize.md
            case "lg": return fontSize.lg
            default: return fontSize.md
        }
    }
    console.log(modeState);
    return (
        <div className="bg-transparent">
            <div className="max-w-md mx-auto">
                {label &&
                    <label htmlFor="select" className={`${getFontSize(sizeState)} ${modeState === "light" ? "text-gray-800" : "text-white"} block py-0.5 pl-1`}>{label}</label>
                }
                <div className={`relative bg-white flex items-center`}>
                    <textarea value={value} className={`px-2 py-1 appearance-none outline-none text-gray-600 w-full border border-gray-200 rounded-lg text-sm`}
                        placeholder={placeholder ? placeholder : ""}
                        onChange={(e) => { setValue(e.target.value) }}
                        cols={20}
                        rows={5}
                    ></textarea>

                    {icon && value !== "" &&
                        <button type="button" className={`cursor-pointer outline-none text-gray-900 hover:text-gray-700 absolute right-1 top-1/2 -translate-y-1/2`} onClick={() => {
                            setValue("")
                        }}>
                            <XMarkIcon className="w-5 h-5" />
                        </button>
                    }

                </div>
            </div>
        </div>
    );
}

export default TextAreaSimple;