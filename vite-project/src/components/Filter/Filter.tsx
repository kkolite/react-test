import React from 'react';
import TagList from '../TagList/TagList';
import classes from './Filter.module.scss';

interface IProps {
  tags: string[],
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const Filter = ({tags, search, setSearch}:IProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.taglist__container}>
        <label>Tags:</label>
        <TagList tags={tags} setSearch={setSearch} className={classes.taglist}/>
      </div>
      <input 
        type="text"
        className={classes.input} 
        placeholder='Search by text'
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
    </div>
  );
};

export default Filter;