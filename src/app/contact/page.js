"use client";
import React from "react";

import ContactForm from "@/components/ContactForm/ContactForm";
import Header from "@/components/Header/Header";
import Header4 from "@/components/Header4/Header4";
import Footer3 from "@/components/Footer3/Footer3";
import ClientPage from "@/components/Clients/Clients";
import QueryForm3 from "@/components/QueryForm3/QueryForm3";
import QueryForm2 from "@/components/QueryForm2/QueryForm2";







export default function ContactPage() {
  return (
    <>
    <Header4 />
    <div className="min-h-screen bg-[#fff] w-full max-w-[1371px] flex flex-col items-center justify-center p pt-20 pb-20  max-sm:px-3 px-6">
     
     <QueryForm3 title="TGF-CONTACT-PAGE"/>
  
    </div>
    <Footer3 />
    </>
  );
}
