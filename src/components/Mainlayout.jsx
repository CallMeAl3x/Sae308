import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import AsideRight from "./AsideRight";

const Mainlayout = () => {
  return (
    <div>
      <div className="gradient bg-cover flex items-center flex-row max-lg:flex-col">
        <NavBar />
        <Main />
        <AsideRight />
      </div>
    </div>
  );
};

export default Mainlayout;
