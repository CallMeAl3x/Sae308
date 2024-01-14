import React from "react";
import NavBar from "../components/NavBar";
import MatchingCard from "../components/MatchingCard";
import AsideRight from "../components/AsideRight";

export const Home = () => {
  return (
    <div className="gradient bg-cover w-screen  items-center block max-lg:ml-auto max-lg:mr-auto justify-center">
      <NavBar />
      <div className="flex items-center justify-center max-lg:flex-col">
        <MatchingCard />
        <AsideRight />
      </div>
    </div>
  );
};
