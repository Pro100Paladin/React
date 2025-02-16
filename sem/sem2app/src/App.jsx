import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/counter'
import TextInput from './component/TextInput'
import ToDoList from './component/ToDoList'
import Timer from './component/Timer'

function App() {

  return (
    <>
      <div>
        <Counter />
        <TextInput />
        <ToDoList />
        <Timer />
      </div>

    </>
  )
}

export default App
