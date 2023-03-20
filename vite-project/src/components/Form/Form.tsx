import React, { useState } from 'react'
import TweetTextarea from 'tweet-textarea-react'
import { IPost } from "../../data/types";
import "./Form.scss"

interface IProps {
  post?: IPost
}

const Form = ({post}:IProps) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" id="" />
      <TweetTextarea 
        value={text}
        defaultValue={post ? post.text : ''}
        onTextUpdate={(e) => setText(e.detail.currentText)} />
      <button>Submit</button>
    </form>
  );
};

export default Form;