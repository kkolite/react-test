import { IPost } from "../../data/types";
import EmptyList from "./EmptyList";
import Post from "../Post/Post";
import classes from "./PostList.module.scss";

interface IProps {
  postList: IPost[],
  openForm: (post?: IPost) => void,
  deletePost: (id: number) => void
}

const PostList = ({postList, openForm, deletePost}:IProps) => {
  const result = postList.length
  ? (<div className={classes.postlist}>
      {postList.map((el) => 
        <Post key={el.id} post={el} deletePost={deletePost} openForm={openForm} />
      )}
    </div>)
  : <EmptyList />
  
  return result
};

export default PostList;