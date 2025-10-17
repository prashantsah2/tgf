"use client";
import React from "react";

import ContactForm from "@/components/ContactForm/ContactForm";
import Header from "@/components/Header/Header";
import Header4 from "@/components/Header4/Header4";
import Footer3 from "@/components/Footer3/Footer3";
import ClientPage from "@/components/Clients/Clients";







export default function ContactPage() {
  return (
    <>
    <Header4 />
    <div className="min-h-screen bg-[#fff] flex flex-col items-center justify-center p pt-20 pb-20">
      <ContactForm />
  
    </div>
    <Footer3 />
    </>
  );
}
