export default function Counters({ item, handleDecriment, handleIncriment }) {
  return (
    <div
      style={{
        margin: "10px auto",
        height: "100px",
        width: "300px",
        border: "1px solid gray",
      }}
    >
      <p style={{ textAlign: "center" }}>{item.value}</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "7px",
            borderRadius: "10px",
          }}
          onClick={() => handleIncriment(item.id)}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "7px",
            borderRadius: "10px",
          }}
          onClick={() => handleDecriment(item.id)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
