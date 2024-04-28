export default function EventCard(props) {
    return (
        <div className="event-card">
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <p>{props.time}</p>
            <p>{props.location}</p>
        </div>
    );
}