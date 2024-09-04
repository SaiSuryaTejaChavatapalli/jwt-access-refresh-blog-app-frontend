import { useParams } from "react-router-dom";

const BlogSection = () => {
  const { section } = useParams();

  return (
    <div>
      <h2>{section} Section</h2>
      {/* Display blog posts based on the section */}
    </div>
  );
};

export default BlogSection;
