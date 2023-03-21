import React, { useEffect, useState } from 'react'
import TweetTextarea from 'tweet-textarea-react'
import { LIMIT } from '../../data/limits';
import patterns from '../../data/patterns';
import { IPost } from "../../data/types";
import classes from './Form.module.scss';
import './Textarea.scss';

interface IProps {
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>,
  post?: IPost | null,
  posts: IPost[],
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({post, posts, setPosts, setVisible}:IProps) => {
  const [text, setText] = useState<string>('');
  const [textSize, setTextSize] = useState<number>(0);

  useEffect(() => {
    if (post) {
      setText(post.text);
      setTextSize(post.text.length);
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tags = uniqTags(text);
    const id = post ? post.id : new Date().getTime();
    const handledPost = {
      id,
      text,
      tags
    }

    if (!post) createNewPost(handledPost, posts);
    if (post) {
      setEditPost(handledPost, posts);
    }
    afterSubmit();
  }

  const uniqTags = (text: string) => {
    const allTags = text.match(patterns.hasgtag) || [];
    const set = new Set(allTags);
    return Array.from(set);
  }

  const createNewPost = (post: IPost, posts: IPost[]) => {
    setPosts([...posts, post]);
  }

  const setEditPost = (post: IPost, posts: IPost[]) => {
    const arr = [...posts.filter((el) => el.id !== post.id)];
    setPosts([...arr, post]);
  }

  const afterSubmit = () => {
    setText('');
    setTextSize(0);
    setVisible(false);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.form__container}>
        <TweetTextarea 
          value={text}
          //className={classes.textarea}
          onTextUpdate={(e) => {
            const value = e.detail.currentText;
            setTextSize(value.length);
            setText(e.detail.currentText);
          }} 
        />
        <label>
          {text.length} / {LIMIT.POST_TEXT}
        </label>
      </div>      
      <button 
        disabled={
          textSize < LIMIT.MIN_POST_TEXT ||
          textSize > LIMIT.POST_TEXT 
        }
        className={classes.button}
      >Submit</button>
    </form>
  );
};

export default Form;