import { IPost } from "../../data/types";
import Post from "./Post";

interface IProps {
  postList: IPost[];
}

const PostList = ({postList}:IProps) => {
  return (
    <div>
      {postList.map((el) => 
        <Post key={el.id} post={el}/>
      )}
    </div>
  );
};

export default PostList;