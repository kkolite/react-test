import classes from "./PostList.module.scss";

const EmptyList = () => {
  return (
    <div className={classes.empty}>
      Empty list
    </div>
  );
};

export default EmptyList;