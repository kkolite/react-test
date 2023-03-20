import { IPost } from "../../data/types";
import TagList from "../UI/TagList";

interface IProps {
  post: IPost,
  deletePost: (id: number) => void
}

const Post = ({post, deletePost}:IProps) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <div>{post.text}</div>
      <TagList tags={post.tags} />
      <div>
        <button>Edit</button>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;