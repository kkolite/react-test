import React, { useState } from 'react';
import TweetTextarea from 'tweet-textarea-react';
import { LIMIT } from '../../data/limits';
import { IPost } from '../../data/types';
import uniqArr from '../../utils/uniqArr';
import TagList from '../TagList/TagList';
import classes from './Form.module.scss';
import './Textarea.scss';

interface ICursorChange {
  start: number;
  end: number;
}

interface IProps {
  post?: IPost | null;
  text: string;
  tags: string[];
  setText: React.Dispatch<React.SetStateAction<string>>;
  submit: () => void;
  create: (post: IPost) => void;
  edit: (post: IPost) => void;
}

const Form = ({ post, text, submit, setText, create, edit, tags }: IProps) => {
  const [cursorPosition, setCursorPosition] = useState<ICursorChange>({ start: 0, end: 0 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tags = uniqArr(text);
    const id = post ? post.id : new Date().getTime();
    const handledPost = {
      id,
      text,
      tags,
    };

    if (!post) create(handledPost);
    if (post) {
      edit(handledPost);
    }
    submit();
  };

  const handleTagClick = (str: string) => {
    const { start, end } = cursorPosition;
    const newText = `${text.slice(0, start)} ${str}${text.slice(end)}`;
    const newCursor = {
      start: start + str.length + 1,
      end: start + str.length + 1,
    };
    setText(newText);
    setCursorPosition(newCursor);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.form__container}>
        <TagList
          tags={uniqArr(['#tag', '#post', ...tags])}
          onClick={handleTagClick}
          className={classes.taglist}
        />
        <TweetTextarea
          value={text}
          cursorPosition={cursorPosition}
          onTextUpdate={(e) => setText(e.detail.currentText)}
          onCursorChange={(e) => setCursorPosition(e.detail)}
        />
        <label>
          {text.length} / {LIMIT.POST_TEXT}
        </label>
      </div>
      <button
        disabled={text.length < LIMIT.MIN_POST_TEXT || text.length > LIMIT.POST_TEXT}
        className={classes.button}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
