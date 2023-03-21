import React from 'react';
import ClearSearch from '../../assets/ClearSearch';
import TagList from '../TagList/TagList';
import classes from './Filter.module.scss';

interface IProps {
  tags: string[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ tags, search, setSearch }: IProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.taglist__container}>
        <label>Tags:</label>
        <TagList tags={tags} setSearch={setSearch} className={classes.taglist} />
      </div>
      <div className={classes.input__container}>
        <input
          type="text"
          className={classes.input}
          placeholder="Search by text"
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
        <span className={classes.input__reset} onClick={() => setSearch('')}>
          <ClearSearch />
        </span>
      </div>
    </div>
  );
};

export default Filter;
