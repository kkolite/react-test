import { IPost } from "../../data/types";
import EmptyList from "./EmptyList";
import Post from "./Post";

interface IProps {
  postList: IPost[],
  openForm: (post?: IPost) => void,
  deletePost: (id: number) => void
}

const PostList = ({postList, openForm, deletePost}:IProps) => {
  const result = postList.length
  ? (<div>
      {postList.map((el) => 
        <Post key={el.id} post={el} deletePost={deletePost} openForm={openForm} />
      )}
    </div>)
  : <EmptyList />
  
  return result
};

export default PostList;