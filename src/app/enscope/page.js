"use client";
import React from "react";
import Enscope from "../../components/Enscope/Enscope";
import Header4 from "@/components/Header4/Header4";
import Footer3 from "@/components/Footer3/Footer3";






const EnscopePage = () => {
  return (
    <>
    <Header4 heading="Enscope" text="Discover our innovative solutions and services."/>
    <div className="flex flex-col justify-center items-center w-full min-h-[91vh] bg-gray-50 pt-20">
      <Enscope />
    </div>
    <Footer3 />
    </>
  );
};

export default EnscopePage;
