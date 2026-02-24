import BlogImage from "../../assets/images/blog6.jpg";
import Banner from "../Common/Banner";

const BlogBanner = () => {
  return (
    <Banner
      title="Explore Blogs and News"
      bgImage={BlogImage}
      breadcrumb="Blog"
    />
  );
};

export default BlogBanner;