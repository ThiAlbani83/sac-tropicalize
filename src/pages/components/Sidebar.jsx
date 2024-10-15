import React from "react";
import LogoTropicalize from "../../assets/logo-tropicalize.png";
import MenuSAC from "../components/MenuSAC";

const Sidebar = () => {
  return (
    <div
      style={{ userSelect: "none" }}
      className="flex flex-col max-w-[300px] w-[250px] h-full gap-10 py-10 overflow-hidden shadow-lg sidebar bg-background"
    >
      <img
        src={LogoTropicalize}
        alt="logo-tropicalize"
        className="w-[75%] mx-auto"
      />
      <div className="flex flex-col h-[90%] justify-between gap-20">
        <div className="mt-20">
          <MenuSAC />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
