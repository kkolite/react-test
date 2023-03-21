import { IPost } from "../../data/types";
import TagList from "../UI/TagList";
import classes from "./Post.module.scss";

interface IProps {
  post: IPost,
  deletePost: (id: number) => void,
  openForm: (post?: IPost) => void,
}

const Post = ({post, deletePost, openForm}:IProps) => {
  return (
    <div className={classes.post}>
      <div>{post.text}</div>
      <TagList tags={post.tags} className={classes.taglist}/>
      <div className={classes.controls}>
        <button 
          onClick={() => openForm(post)}
          className={classes.button}
          >Edit
        </button>
        <button 
          className={classes.button}
          onClick={() => deletePost(post.id)}
          >Delete
        </button>
      </div>
    </div>
  );
};

export default Post;