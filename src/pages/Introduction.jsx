import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import MatchingCard from "../components/MatchingCard";
import AsideRight from "../components/AsideRight";

export const Home = () => {
  useEffect(() => {
    // Reset box shadow when component unmounts or page changes
    return () => {
      document.body.style.boxShadow = "none";
    };
  }, []);

  return (
    <div className="gradient bg-cover w-auto lg:h-screen lg:overflow-hidden items-center block max-lg:ml-auto max-lg:mr-auto justify-center">
      <NavBar />
      <div className="flex items-center justify-center max-lg:flex-col">
        <MatchingCard />
        <AsideRight />
      </div>
    </div>
  );
};
