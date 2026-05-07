import Blog from '@/components/Blog';
import Breadcrumb from '@/components/Breadcrumb';
import ClientReview from '@/components/service/ClientReview';
import CustomersSays from '@/components/service/CustomersSays';
import ServiceCard from '@/components/service/ServiceCard';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Breadcrumb nameKey={"services"} url={"service"} />
      <ServiceCard/>
      <ClientReview/>
      <CustomersSays/>
      <Blog/>
    </div>
  );
}

export default page