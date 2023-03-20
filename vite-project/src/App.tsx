import { useState } from 'react'
import MainControls from './components/MainControls'
import PostList from './components/List/PostList'
import { IPost } from './data/types'
import Form from './components/Form/Form';

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <div className="App">
      <div className="container">
        <MainControls setPost={setPosts}/>
        <Form setPosts={setPosts} posts={posts}/>
        <PostList postList={posts} />
      </div>
    </div>
  )
}

export default App
