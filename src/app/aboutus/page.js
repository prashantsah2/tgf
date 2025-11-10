"use client"
import Header4 from "@/components/Header4/Header4";
import Teams from "@/components/Teams/Teams";
import About2 from "@/components/About2/About2";
import Footer3 from "@/components/Footer3/Footer3";
import AboutMain from "@/components/AboutMain/AboutMain";
import Whyus from "@/components/Whyus/Whyus";



export default function Aboutus(){


const teamMember = [
  { name: 'Prashant', surname: 'Gupta ', image: '/image/page 14 - Our Core Team (2)',id:12 },
  { name: 'Abhishek K', surname: 'Srivastava', image: '/api/placeholder/150/150',id:13 },
  { name: 'Ajay', surname: 'Srivastava', image: '/api/placeholder/150/150',id:14 },
  { name: 'Nishad', surname: 'Nanavaty', image: '/api/placeholder/150/150',id:15 },

];


    return(
        <>
        <Header4 heading="About Us" text="Learn more about our team and mission."/>
        <div className="flex flex-col justify-center items-center w-full min-h-[91vh] pt-20 max-sm:px-4">
        <AboutMain/>
        <Whyus/>
        </div>
        <Footer3/>

        </>
    )
}