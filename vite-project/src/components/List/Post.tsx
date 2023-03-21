import { IPost } from "../../data/types";
import TagList from "../UI/TagList";

interface IProps {
  post: IPost,
  deletePost: (id: number) => void,
  openForm: (post?: IPost) => void,
}

const Post = ({post, deletePost, openForm}:IProps) => {
  return (
    <div>
      <div>{post.text}</div>
      <TagList tags={post.tags} />
      <div>
        <button onClick={() => openForm(post)}>Edit</button>
        <button onClick={() => deletePost(post.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Post;