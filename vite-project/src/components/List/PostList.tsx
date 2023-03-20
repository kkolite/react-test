import { IPost } from "../../data/types";
import EmptyList from "./EmptyList";
import Post from "./Post";

interface IProps {
  postList: IPost[];
}

const PostList = ({postList}:IProps) => {
  const result = postList.length
  ? (<div>
      {postList.map((el) => 
        <Post key={el.id} post={el}/>
      )}
    </div>)
  : <EmptyList />
  
  return result
};

export default PostList;