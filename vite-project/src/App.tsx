import { useState } from 'react'
import MainControls from './components/MainControls'
import PostList from './components/List/PostList'
import { IPost } from './data/types'
import Form from './components/Form/Form';
import MyModal from './components/UI/modal/MyModal';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [viseble, setVisible] = useState<boolean>(false);
  const [edit, setEdit] = useState<IPost | null>(null);
  const [text, setText] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const openForm = (post?: IPost) => {
    setEdit(post || null);
    setText(post ? post.text : '');
    setVisible(true);
  }

  const deletePost = (id: number) => {
    setPosts(posts.filter((el) => el.id !== id));
  }

  const createNewPost = (post: IPost) => {
    setPosts([...posts, post]);
  }

  const setEditPost = (post: IPost) => {
    const arr = [...posts];
    const index = arr.findIndex((el) => el.id === post.id);
    arr[index] = post;
    setPosts([...arr]);
  }

  const afterSubmit = () => {
    setText('');
    setVisible(false);
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    setSearch(value);
  }

  return (
    <div className="App">
      <div className="container">
        <MainControls openForm={openForm}/>
        <MyModal visible={viseble} setVisible={setVisible}>
          <Form 
            post={edit} 
            text={text}
            setText={setText}
            submit={afterSubmit}
            create={createNewPost}
            edit={setEditPost}
          />
        </MyModal>
        <input 
          type="text" 
          value={search}
          onChange={handleSearch}
        />
        <PostList 
          postList={posts.filter((el) => el.text.toLowerCase().includes(search))}
          openForm={openForm} 
          deletePost={deletePost}
          setSearch={setSearch}
        />
      </div>
    </div>
  )
}

export default App
