import React from 'react'
import TweetTextarea from 'tweet-textarea-react'
import { LIMIT } from '../../data/limits';
import patterns from '../../data/patterns';
import { IPost } from "../../data/types";
import classes from './Form.module.scss';
import './Textarea.scss';

interface IProps {
  post?: IPost | null,
  text: string,
  setText: React.Dispatch<React.SetStateAction<string>>,
  submit: () => void,
  create: (post: IPost) => void,
  edit: (post: IPost) => void
}

const Form = ({post, text, submit, setText, create, edit}:IProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tags = uniqTags(text);
    const id = post ? post.id : new Date().getTime();
    const handledPost = {
      id,
      text,
      tags
    }

    if (!post) create(handledPost);
    if (post) {
      edit(handledPost);
    }
    submit();
  }

  const uniqTags = (text: string) => {
    const allTags = text.match(patterns.hasgtag) || [];
    const set = new Set(allTags);
    return Array.from(set);
  }

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <div className={classes.form__container}>
        <TweetTextarea 
          value={text}
          onTextUpdate={(e) => {
            const value = e.detail.currentText;
            setText(e.detail.currentText);
          }}
        />
        <label>
          {text.length} / {LIMIT.POST_TEXT}
        </label>
      </div>      
      <button 
        disabled={
          text.length < LIMIT.MIN_POST_TEXT ||
          text.length > LIMIT.POST_TEXT 
        }
        className={classes.button}
      >Submit</button>
    </form>
  );
};

export default Form;