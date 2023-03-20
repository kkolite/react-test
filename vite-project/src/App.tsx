import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainControls from './components/MainControls'
import PostList from './components/List/PostList'
import { IPost } from './data/types'

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  return (
    <div className="App">
      <MainControls setPost={setPosts}/>
      <PostList postList={posts} />
    </div>
  )
}

export default App
