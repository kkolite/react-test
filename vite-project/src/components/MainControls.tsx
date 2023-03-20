import React from "react";
import { IPost } from "../data/types";

interface IProps {
  setPost: React.Dispatch<React.SetStateAction<IPost[]>>
}

const MainControls = ({setPost}:IProps) => {
  return (
    <div>
      <button>Create Post</button>
    </div>
  );
};

export default MainControls;