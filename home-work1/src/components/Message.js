export default function Message(props) {
    return (
        <div className="message">
            <h1>{props.title}</h1>
            <p>{props.textMessage}</p>
        </div>
    );
  }