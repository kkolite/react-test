import { useState } from 'react'
import MainControls from './components/MainControls'
import PostList from './components/List/PostList'
import { IPost } from './data/types'
import Form from './components/Form/Form';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [filterPosts, setFilter] = useState<IPost[]>(posts);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    setFilter(posts.filter((el) => 
      el.tags.includes(value) || el.title.toLowerCase().includes(value)
    ));
  }

  return (
    <div className="App">
      <div className="container">
        <MainControls setPost={setPosts}/>
        <Form setPosts={setPosts} posts={posts}/>
        <input type="text" name="" id="" onChange={handleSearch}/>
        <PostList postList={filterPosts} setPosts={setPosts}/>
      </div>
    </div>
  )
}

export default App
