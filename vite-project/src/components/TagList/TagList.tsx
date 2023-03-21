import classes from './TagList.module.scss';

interface IProps {
  tags: string[];
  onClick: (str: string) => void;
  [key: string]: unknown;
}

const TagList = ({ tags, onClick, ...props }: IProps) => {
  const result = tags.length ? (
    <div {...props}>
      {tags.map((el) => (
        <span key={el} className={classes.taglink} onClick={() => onClick(el)}>
          {el}
        </span>
      ))}
    </div>
  ) : (
    <div>-</div>
  );

  return result;
};

export default TagList;
