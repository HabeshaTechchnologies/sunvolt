import BlogList from '@/components/blog/BlogList';
import Breadcrumb from '@/components/Breadcrumb';
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Breadcrumb nameKey={"blogs"} url={"blog"} />
      <BlogList/>
    </div>
  );
}

export default page