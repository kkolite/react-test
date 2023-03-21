import { useState } from 'react';
import MainControls from './components/MainControls/MainControls';
import PostList from './components/List/PostList';
import { IPost } from './data/types';
import Form from './components/Form/Form';
import MyModal from './components/UI/modal/MyModal';
import Filter from './components/Filter/Filter';
import uniqArr from './utils/uniqArr';
import * as data from './data/posts.json'

function App() {
  const [posts, setPosts] = useState<IPost[]>(data.posts);
  const [viseble, setVisible] = useState<boolean>(false);
  const [edit, setEdit] = useState<IPost | null>(null);
  const [text, setText] = useState<string>('');
  const [search, setSearch] = useState<string>('');

  const openForm = (post?: IPost) => {
    setEdit(post || null);
    setText(post ? post.text : '');
    setVisible(true);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((el) => el.id !== id));
  };

  const createNewPost = (post: IPost) => {
    setPosts([...posts, post]);
  };

  const setEditPost = (post: IPost) => {
    const arr = [...posts];
    const index = arr.findIndex((el) => el.id === post.id);
    arr[index] = post;
    setPosts([...arr]);
  };

  const afterSubmit = () => {
    setText('');
    setVisible(false);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="header__h">#Hash_List</h1>
        <MainControls openForm={openForm} />
      </header>
      <main className="main">
        <MyModal visible={viseble} setVisible={setVisible}>
          <Form
            post={edit}
            text={text}
            tags={uniqArr(posts.map((el) => el.tags).flat())}
            setText={setText}
            submit={afterSubmit}
            create={createNewPost}
            edit={setEditPost}
          />
        </MyModal>
        {posts.length ? (
          <Filter
            search={search}
            setSearch={setSearch}
            tags={uniqArr(posts.map((el) => el.tags).flat())}
          />
        ) : (
          <></>
        )}
        <PostList
          postList={posts.filter((el) => el.text.toLowerCase().includes(search))}
          openForm={openForm}
          deletePost={deletePost}
          setSearch={setSearch}
        />
      </main>
      <footer className="footer">
        <div>2023</div>
        <div>
          <a href="https://github.com/kkolite" className="footer__link">
            kkolite
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
