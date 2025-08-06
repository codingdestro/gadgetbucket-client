import {
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  Tag,
} from "lucide-react";
import { useState } from "react";

const SortButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const sortOptions = [
    {
      label: "Default",
      icon: <ArrowUpDown className="w-4 h-4" />,
      value: "oldest",
    },
    {
      label: "Price: Low to High",
      icon: <ArrowUp className="w-4 h-4" />,
      value: "low-to-high",
    },
    {
      label: "Price: High to Low",
      icon: <ArrowDown className="w-4 h-4" />,
      value: "high-to-low",
    },
    {
      label: "Best Offers",
      icon: <Tag className="w-4 h-4" />,
      value: "newest",
    },
  ];

  return (
    <div className="flex items-center border rounded-lg px-3 py-2 relative font-thin">
      <button
        className="flex items-center gap-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ArrowUpDown className="w-4 h-4 text-gray-500" />
        <span className="text-nowrap ">
          Sort: {sortOptions[selectedOption].label}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>
      <div
        data-active={[isOpen]}
        className="absolute  py-1 hidden transition-all duration-300 opacity-0 data-[active=true]:opacity-100 data-[active=true]:flex flex-col w-3xs top-full right-0  bg-white border rounded-lg shadow-lg mt-1 z-20"
      >
        {sortOptions.map((option, index) => (
          <button
            key={option.value}
            data-selected={selectedOption === index}
            className="flex items-center gap-2 px-3 py-5 hover:bg-gray-100 transition-colors rounded-md data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary"
            onClick={() => {
              console.log(`Sorting by: ${option.value}`);
              setSelectedOption(index);
              setIsOpen(false);
            }}
          >
            {option.icon}
            {option.label}
          </button>
        ))}
      </div>
      {/* overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-10 ${isOpen ? "" : "hidden"}`}
      ></div>
    </div>
  );
};

export default SortButton;
