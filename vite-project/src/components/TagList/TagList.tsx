import classes from "./TagList.module.scss"

interface IProps {
  tags: string[],
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  [key: string]: unknown
}

const TagList = ({tags, setSearch, ...props}:IProps) => {
  const result = tags.length
  ? (
    <div {...props}>
      {tags.map((el) => 
        <span 
          key={el} 
          className={classes.taglink}
          onClick={() => setSearch(el)}
        >
          {el}
        </span>
      )}
    </div>
    )
  : <div>-</div>;

  return result;
};

export default TagList;