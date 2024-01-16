import MainLayoutSources from "../components/MainLayoutSources";
import NavBar from "../components/NavBar";
import React, { useEffect,  } from "react";

const Sources = () => {
    useEffect(() => {
        // Reset box shadow when component unmounts or page changes
        return () => {
          document.body.style.boxShadow = "none";
        };
      }, []);
    return ( 
        <div className="">
        <NavBar />
        <MainLayoutSources />
      </div>

     );
}
 
export default Sources;