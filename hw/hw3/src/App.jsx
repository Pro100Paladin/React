import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './component/TodoList/TodoList'
import TemperatureConverter from './component/TemperatureConverter/TemperatureConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="Tasks">
          <div className="FirstTask">
            <TemperatureConverter />
          </div>
          <div className="SecondTask">
            <TodoList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
