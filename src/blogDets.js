import { useHistory, useParams } from "react-router-dom";
import useFetcher from "./useFetcher";

const BlogDets = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    IsPending,
  } = useFetcher("http://localhost:8000/blogs/" + id);
  const hist = useHistory();
  // delte blog fucntion
  const handleDelete = () => {
    fetch("  http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      hist.push("/");
    });
  };
  return (
    <div className="blogs-details">
      {IsPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>Title:{blog.title}</h2>
          <div>Wriiter:{blog.author}</div>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete this Blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDets;
