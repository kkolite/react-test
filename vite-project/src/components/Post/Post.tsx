import patterns from '../../data/patterns';
import { IPost } from '../../data/types';
import TagList from '../TagList/TagList';
import classes from './Post.module.scss';

interface IProps {
  post: IPost;
  deletePost: (id: number) => void;
  openForm: (post?: IPost) => void;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Post = ({ post, deletePost, openForm, setSearch }: IProps) => {
  const handleTagClick = (str: string) => setSearch(str);

  return (
    <div className={classes.post}>
      <div
        dangerouslySetInnerHTML={{
          __html: post.text.replaceAll(patterns.hasgtag, '<span class="highlight">$&</span>'),
        }}
      />
      <div className={classes.controls__container}>
        <div className={classes.taglist__container}>
          <label>Tags:</label>
          <TagList tags={post.tags} className={classes.taglist} onClick={handleTagClick} />
        </div>
        <div className={classes.controls}>
          <button onClick={() => openForm(post)} className={classes.button}>
            Edit
          </button>
          <button className={classes.button} onClick={() => deletePost(post.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
