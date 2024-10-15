import { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../utils/MenuData";

const MenuSAC = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeSubIndex, setActiveSubIndex] = useState(null);

  const toggleMenu = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setActiveSubIndex(null);
  };

  const toggleSubmenu = (index) => {
    setActiveSubIndex(index === activeSubIndex ? null : index);
  };


  return (
    <div className="">
      <ul className="flex flex-col gap-6 px-6">
        {menuItems.map((item, index) => (
          <li key={index} className="space-y-3">
            <span onClick={() => toggleMenu(index)} className="text-xl text-gray-200 cursor-pointer">
              {item.title}
            </span>
            {activeIndex === index && (
              <ul className="px-10 space-y-3 list-disc">
                {item.subItems.map((subItem, subIndex) => (
                  <li onClick={() => toggleSubmenu(subIndex)} key={subIndex} className={activeSubIndex === subIndex ? "text-primaryLight" : `text-gray-200`}>
                    {/* Usando Link para navegação */}
                    <Link to={subItem.link}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSAC;
