interface IProps {
  tags: string[],
  [key: string]: unknown
}
const TagList = ({tags, ...props}:IProps) => {
  const result = tags.length
  ? (
    <div {...props}>
      {tags.map((el) => 
        <span key={el} className="highlight">{el}</span>
      )}
    </div>
    )
  : <div>No tags</div>;

  return result;
};

export default TagList;