import { useState } from 'react'
import MainControls from './components/MainControls'
import PostList from './components/List/PostList'
import { IPost } from './data/types'
import Form from './components/Form/Form';
import MyModal from './components/UI/modal/MyModal';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filterPosts, setFilter] = useState<IPost[]>(posts);
  const [viseble, setVisible] = useState<boolean>(false);
  const [edit, setEdit] = useState<IPost | null>(null);

  const openForm = (post?: IPost) => {
    setEdit(post || null);
    setVisible(true);
  }

  const deletePost = (id: number) => {
    setPosts(posts.filter((el) => el.id !== id));
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    setFilter(posts.filter((el) => 
      el.tags.includes(value)
    ));
  }

  return (
    <div className="App">
      <div className="container">
        <MainControls openForm={openForm}/>
        <MyModal visible={viseble} setVisible={setVisible}>
          <Form 
            setPosts={setPosts} 
            posts={posts} 
            post={edit} 
            setVisible={setVisible}
          />
        </MyModal>
        <input type="text" name="" id="" onChange={handleSearch}/>
        <PostList 
          /*postList={filterPosts} */
          postList={posts}
          openForm={openForm} 
          deletePost={deletePost}
        />
      </div>
    </div>
  )
}

export default App
