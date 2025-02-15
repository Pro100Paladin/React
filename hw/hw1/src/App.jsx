import './App.css'
import Message from './Message'

function App() {

  return (
      <div className='App'>
        <Message namePerson={"Djon"} yearPerson={37} />
        <Message namePerson={"Oksana"} yearPerson={35} propsBoollean = "true" />
      </div>
  )
}

export default App
