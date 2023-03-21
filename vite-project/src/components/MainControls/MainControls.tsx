import { IPost } from "../../data/types";
import classes from "./MainControls.module.scss"

interface IProps {
  openForm: (post?: IPost) => void
}

const MainControls = ({openForm}:IProps) => {
  const handleClick = () => {
    openForm();
  }

  return (
    <div>
      <button className={classes.button} onClick={handleClick}>New Post</button>
    </div>
  );
};

export default MainControls;