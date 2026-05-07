import SingleBlog from "@/components/blog/SingleBlog";
import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>; // In Next 15/16, params is a Promise
};

const Page = async ({ params }: Props) => {
  const { slug } = await params; // Await the promise here!

  return (
    <div>
      <Breadcrumb name="BLOG DETAILS" url="blog" />
      <SingleBlog params={{ slug }} />
    </div>
  );
};

export default Page;
