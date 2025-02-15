function Message({namePerson, yearPerson, propsBoollean}) {
    return (
        <div className="message">
            <h2 style={{ color: propsBoollean ? "gray" : "red" }} className="message__name"><span>Имя: </span> "{namePerson}"</h2>
            <h2 className="message__year"><span>Возпрост: </span>"{yearPerson}"</h2>
        </div>
    );
}

export default Message
