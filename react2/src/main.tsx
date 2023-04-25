import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PostList } from './components/postList/postList.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PostList />
  </React.StrictMode>,
)
