import React from "react";
import Logo from "../assets/Logo.jpg";
import LogoT from "../assets/LogoT.png";

const Heading = () => {
  return (
    <div className="flex justify-start items-center py-6 px-10">
      <img src={LogoT} width={200} className="mr-8 bg-slate-300 rounded-sm p-2" />
      <div className="text-center text-white font-montserrat text-6xl">
        DNA Sequence to Disease Risk
      </div>
    </div>
  );
};

export default Heading;
