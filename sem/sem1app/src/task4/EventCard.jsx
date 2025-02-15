function EventCard({title, date, location, propsBoollean}) {
    return (
        <div className="EventCard">
            <h2 style={{ color: propsBoollean ? 'green' : 'red' }}><span className="event__title">группа: </span>"{title}"</h2>
            <h2><span className="event__Date">Дата: </span>"{date}"</h2>
            <h2><span className="event__Description">Адрес: </span>"{location}"</h2>
        </div>
    );
}

export default EventCard;