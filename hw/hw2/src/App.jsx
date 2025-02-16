import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommentsList from './components/CommentsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CommentsList />
    </>
  )
}

export default App
