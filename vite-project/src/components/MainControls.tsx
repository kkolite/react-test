import React from "react";
import { IPost } from "../data/types";

interface IProps {
  openForm: (post?: IPost) => void
}

const MainControls = ({openForm}:IProps) => {
  const handleClick = () => {
    openForm();
  }

  return (
    <div>
      <button onClick={handleClick}>Create Post</button>
    </div>
  );
};

export default MainControls;