import React, { useEffect } from "react";
import Mainlayoutpart2 from "../components/Mainlayoutpart2";
import NavBar from "../components/NavBar";

const Part2 = () => {
  useEffect(() => {
    // Reset box shadow when component unmounts or page changes
    return () => {
      document.body.style.boxShadow = "none";
    };
  }, []);

  return (
    <div className="overflow-x-clip">
      <NavBar />
      <Mainlayoutpart2 />
    </div>
  );
};

export default Part2;
