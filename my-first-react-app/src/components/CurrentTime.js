export default function CurrentTime() {
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <h2 style={{backgroundColor: "darkgreen", borderRadius: "5px", color: "yellow" }}>Current Time</h2>
            {time > 12 ? (
                <h1 style={{color: "red"}}>{time}</h1>
            ) : (
                <h1 style={{color: "green"}}>{time}</h1>
            )}
        </div>
    );
}