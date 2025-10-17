"use client"
import Header4 from "@/components/Header4/Header4";
import Teams from "@/components/Teams/Teams";
import About2 from "@/components/About2/About2";
import Footer3 from "@/components/Footer3/Footer3";
import Service1 from "../../components/Service1/Service1";
import OurStory from "@/components/OurStory/OurStory";



export default function Aboutus(){




    return(
        <>
        <Header4 heading="About Us" text="Learn more about our team and mission."/>
        <div className="flex flex-col justify-center items-center w-full min-h-[91vh] pt-20">
         <About2/>
         
         <Teams/>
        <OurStory/>
        </div>
        <Footer3/>

        </>
    )
}