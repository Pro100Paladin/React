import './App.css'
import './task2/greeting.css'
import './task3/CurrentTime.css'
import './task4/EventCard.css'

import Greeting from './task2/Greeting'
import NewComponent from './task2/NewComponent'
import CurrentTime from './task3/CurrentTime'
import EventCard from './task4/EventCard'

function App() {

  return (
    <>
      <div className='App'>
        <CurrentTime />
        <Greeting />
        <NewComponent />

        <div>
          <EventCard title="группа" date="22" location="Москва" />
          <EventCard title="моя группа" date="22" location="СПБ" />
          <EventCard title="шарики" date="11" location="Новгород" />
          <EventCard title="лошарики" date="13" location="Тверь" />
          
          propsBoollean = "false"
        </div>

      </div>
    </>
  )
}


export default App

