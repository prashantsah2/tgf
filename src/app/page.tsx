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
export default function Campaign() {





  return (
    <>
      {/* <HeaderNew/> */}

      <Header4/>
     {/*  <Popup/> */}
       <Hero5/>
           <WhoWeAre/>
           <ServicesHome/>
      <ClientsSection/>
      <Noteworthy/>
      <Stats/>
      <ServicesList/>

      
      <News/>
      <LatestBlogs/>
   
      <Overview/>
   
      
     
      <QueryForm2/>

      <div className="w-full flex justify-center items-center flex-col bg-[#0a06ce]">
       {/*  <Static11 /> */}
     
   

       
       {/*  <BentoSet2/> */}
      </div>
      <Footer3/>
      
    {/*   <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      /> */}
      
    </>
  );
}
