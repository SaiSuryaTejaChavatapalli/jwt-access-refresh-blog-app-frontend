import { useParams } from "react-router-dom";

const BlogSection = () => {
  const { section } = useParams();

  return (
    <div>
      <h2>{section} Section</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
        veritatis illo soluta, suscipit aut hic cumque repellendus fugit ullam
        id officia, quae sint velit odit? Voluptatibus culpa nostrum totam amet.
      </p>
    </div>
  );
};

export default BlogSection;
