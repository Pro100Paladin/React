import './App.css'
import './Message.css'
import Message from './Message'

function App() {

  return (
      <div className='App'>
        <Message namePerson={"Djon"} yearPerson={37} propsBoollean={true}/>
        <Message namePerson={"Oksana"} yearPerson={35} propsBoollean = {false} />
      </div>
  )
}

export default App
