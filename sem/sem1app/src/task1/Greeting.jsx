function Greeting() {
    return ( 
        <div className="greeting">
            <header>
            <h1>Привет, React</h1>
            </header>
            <button className='Greeting__button' onClick={"document.location='yandex.ru'"}>отправить</button>
        </div>
     );
}

export default Greeting;