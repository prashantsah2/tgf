"use client"
import { Car, Quote } from 'lucide-react';
import React from 'react';

import Carbon1 from '@/components/Carbon1/Carbon1';
import Footer3 from '@/components/Footer3/Footer3';
import Header4 from '@/components/Header4/Header4';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import HeroMain from "@/components/HeroMain/HeroMain"





export default function CarbonFootprint() {






return(
<>

<Header4 heading="Carbon Footprint" text="Understand and reduce your carbon footprint with our expert solutions."/>
<div className='flex flex-col justify-center items-center w-full min-h-[91vh] bg-[#fff] pt-20 w-full'>
<HeroMain/>
<Carbon1 />

{/* <QuoteForm /> */}
</div>
<Footer3/>

</>


)


}