function CurrentTime() {
    const currentTime = new Date
    return (
        < div className="Time" >
            <h2>текущее время: {currentTime.toLocaleTimeString([],
                {
                    hour: "numeric",
                    minute: "numeric",
                })}</h2>
            <h2>Дата: {currentTime.toLocaleDateString("en-gb")}</h2>
        </div>
    );
}

export default CurrentTime;