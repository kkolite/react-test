import React from "react";
import { IPost } from "../data/types";

interface IProps {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const MainControls = ({setVisible}:IProps) => {
  const handleClick = () => {
    setVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Create Post</button>
    </div>
  );
};

export default MainControls;