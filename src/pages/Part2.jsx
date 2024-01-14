import React from "react";
import Aside from "../components/NavBar";
import Mainlayoutpart2 from "../components/Mainlayoutpart2";
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";

const Part2 = () => {
  return (
    <div className="overflow-x-clip">
      <NavBar />
      <Mainlayoutpart2 />
    </div>
  );
};

export default Part2;
