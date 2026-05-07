import About from '@/components/About'
import CompanyAbout from '@/components/about/CompanyAbout';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Facts from '@/components/Facts';
import Feedback from '@/components/Feedback';
import Gallery from '@/components/Gallery';
import GapTop from '@/components/GapTop';
import Hero from '@/components/Hero'
import Projects from '@/components/Projects';
import Service from '@/components/Service';
import Team from '@/components/Team';
import WhyChoose from '@/components/WhyChoose';
import PageLoader from "@/components/PageLoader";
import Script from 'next/script';
import React from 'react'

const page = () => {
  return (
    <div>
      <PageLoader />
      <Hero />
      <About />
      <CompanyAbout />
      <WhyChoose />
      <CTA />
      <Facts />
      <Service />
      <Gallery />
      <Feedback />
      {/* <Projects/> */}
      {/* <GapTop/>*/}
      {/* <Team/> */}
      <Blog />
    </div>
  );
}

export default page
