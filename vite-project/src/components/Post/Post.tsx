import { IPost } from "../../data/types";
import TagList from "../TagList/TagList";
import classes from "./Post.module.scss";

interface IProps {
  post: IPost,
  deletePost: (id: number) => void,
  openForm: (post?: IPost) => void,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Post = ({post, deletePost, openForm, setSearch}:IProps) => {
  return (
    <div className={classes.post}>
      <div>{post.text}</div>
      <TagList 
        tags={post.tags} 
        className={classes.taglist}
        setSearch={setSearch}
      />
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