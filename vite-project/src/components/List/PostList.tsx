import { IPost } from "../../data/types";
import EmptyList from "./EmptyList";
import Post from "./Post";

interface IProps {
  postList: IPost[],
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>
}

const PostList = ({postList, setPosts}:IProps) => {
  const deletePost = (id: number) => {
    setPosts(postList.filter((el) => el.id !== id));
  }

  const result = postList.length
  ? (<div>
      {postList.map((el) => 
        <Post key={el.id} post={el} deletePost={deletePost}/>
      )}
    </div>)
  : <EmptyList />
  
  return result
};

export default PostList;