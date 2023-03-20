import React, { useState } from 'react'
import TweetTextarea from 'tweet-textarea-react'
import { LIMIT } from '../../data/limits';
import patterns from '../../data/patterns';
import { IPost } from "../../data/types";
import "./Form.scss"

interface IProps {
  setPosts: React.Dispatch<React.SetStateAction<IPost[]>>,
  post?: IPost,
  posts: IPost[]
}

const Form = ({post, posts, setPosts}:IProps) => {
  const [text, setText] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [titleSize, setTitleSize] = useState<number>(0);
  const [textSize, setTextSize] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const tags = text.match(patterns.hasgtag) || [];
    const id = post ? post.id : new Date().getTime();
    const handledPost = {
      id,
      title,
      text,
      tags
    }

    if (!post) createNewPost(handledPost, posts);
    if (post) {
      setEditPost(handledPost, posts);
    }
    setText('');
  }

  const createNewPost = (post: IPost, posts: IPost[]) => {
    setPosts([...posts, post]);
  }

  const setEditPost = (post: IPost, posts: IPost[]) => {
    const arr = [...posts];
    const index = arr.findIndex((el) => el.id === post.id);
    arr[index] = post;
    setPosts(arr);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title"  
        value={title} 
        onChange={(e) => {
          const value = e.currentTarget.value;
          if (value.length > LIMIT.POST_TITLE) return;
          setTitleSize(value.length);
          setTitle(e.currentTarget.value);
        }}
      />
      <label>
        {titleSize} / {LIMIT.POST_TITLE}
      </label>
      <TweetTextarea 
        value={text}
        defaultValue={post ? post.text : ''}
        onTextUpdate={(e) => {
          const value = e.detail.currentText;
          if (value.length > LIMIT.POST_TEXT) return;
          setTextSize(e.detail.currentText.length);
          setText(e.detail.currentText);
        }} 
      />
      <label>
        {textSize} / {LIMIT.POST_TEXT}
      </label>
      <button 
        disabled={
          titleSize < LIMIT.MIN_POST_TITLE || 
          textSize < LIMIT.MIN_POST_TEXT
        }
      >Submit</button>
    </form>
  );
};

export default Form;