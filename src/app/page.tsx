"use client"

import Header4 from "@/components/Header4/Header4";
import News from "@/components/News/News";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";

import ClientsSection from "@/components/ClientsSection/ClientsSection";
import QueryForm2 from "@/components/QueryForm2/QueryForm2"
import Footer3 from "@/components/Footer3/Footer3"
import Hero5 from "@/components/Hero5/Hero5"
import ServicesList from "@/components/ServicesList/ServicesList"
import Popup from "@/components/Popup/Popus"
import Noteworthy from "@/components/Noteworthy/Noteworthy"
import Stats from "@/components/Stats/Stats"
import Overview from "@/components/Overview/Overview"
import LatestBlogs from "@/components/LatestBlog/LatestBlog"
import ServicesHome from "@/components/ServicesHome/ServicesHome"
import NewsLetter from "@/components/NewsLetter/NewsLetter"
import FAQ2 from "@/components/FAQ2/FAQ2"
import Whyus from "@/components/Whyus/Whyus"
import AboutMain from "@/components/AboutMain/AboutMain"
import Reviews from "@/components/Reviews/Reviews"
export default function Campaign() {





  return (
    <>
   

      <Header4/>
   
       <Hero5/>
    {/*        <WhoWeAre/>
           <ServicesHome/>
     
      <Noteworthy/>
      <Stats/>

      <LatestBlogs/>
   
      <Overview/>
   
      
     


      <QueryForm2/> */}
      <AboutMain/>
      <Whyus/>
      <ClientsSection/>
      <FAQ2/>
      <Reviews/>
      <NewsLetter/>


       
      <div className="w-full flex justify-center items-center flex-col bg-[#0a06ce]">
      
      </div>
      <Footer3/>
      
   
      
    </>
  );
}
