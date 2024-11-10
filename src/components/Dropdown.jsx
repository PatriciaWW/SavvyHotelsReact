// import { FiChevronDown } from '@fortawesome/fontawesome-svg-core'
// import { FiChevronDown } from '@fortawesome/free-brands-svg-icons'
// import { FiChevronDown } from '@fortawesome/free-solid-svg-icons'

import { MdArrowDropDown } from "react-icons/md";

const Dropdown = ({isDropdownOpen, setIsDropdownOpen, setCategory}) => {

    const toggleDropdown = () => {
        setIsDropdownOpen(true);
    };

    const handleSelect = (category) => {
        setCategory(category);
        setIsDropdownOpen(false);
    }

    return ( 
        <div>
            <label className="mt-4">Select the room category:</label><br />
        
            <button className="  px-4 w-full py-2 flex items-center justify-between  rounded border border-[#828FA340] hover:border-primary cursor-pointer relative "
            onClick={toggleDropdown}>
                <span className="block">
                    <MdArrowDropDown color="#30D5C8" size={24} />
                </span>

                {isDropdownOpen &&
                    <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
                        <ul className="flex flex-col p-2">
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Standard hotel room")}>
                                <span>Standard hotel room</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Minimalist hotel room")}>
                                <span>Minimalist hotel room</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Deluxe hotel room")}>
                                <span>Deluxe hotel room</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Studio hotel room")}>
                                <span>Studio hotel room</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Connecting room")}>
                                <span>Connecting room</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Standard suite room")}>
                                <span>Standard suite room</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Junior suite")}>
                                <span>Junior suite</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Presidential suite")}>
                                <span>Presidential suite</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Honeymoon suite")}>
                                <span>Honeymoon suite</span>
                            </li>
                            <li className={`flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 `} onClick={() => handleSelect("Bridal suite")}>
                                <span>Bridal suite</span>
                            </li>
                        </ul>
                    </div>
                }
            </button>
        </div>
    );
}

export default Dropdown;
