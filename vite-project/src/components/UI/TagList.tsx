interface IProps {
  tags: string[]
}
const TagList = ({tags}:IProps) => {
  const result = tags.length
  ? (
    <div>
      {tags.map((el) => 
        <span key={el}>#{el}</span>
      )}
    </div>
    )
  : <div>No tags</div>;

  return result;
};

export default TagList;