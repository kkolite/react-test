import { IPost } from "../../data/types";

interface IProps {
  post: IPost
}

const Post = ({post}:IProps) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <div>{post.text}</div>
      <div>
        {post.tags.map((el) => 
          <span key={el}>#{el}</span>
        )}
      </div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Post;