import { useParams } from "react-router-dom";
import BlogView from "../components/Blog/BlogView";

const BlogViewPage = () => {
  const { id } = useParams();

  return <BlogView postId={id} />;
};

export default BlogViewPage;
