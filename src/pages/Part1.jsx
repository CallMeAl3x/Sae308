import React, { useEffect } from "react";
import Mainlayoutpart1 from "../components/Mainlayoutpart1";
import NavBar from "../components/NavBar";

const Part1 = () => {
  useEffect(() => {
    // Reset box shadow when component unmounts or page changes
    return () => {
      document.body.style.boxShadow = "none";
    };
  }, []);

  return (
    <div>
      <NavBar />
      <Mainlayoutpart1 />
    </div>
  );
};

export default Part1;
