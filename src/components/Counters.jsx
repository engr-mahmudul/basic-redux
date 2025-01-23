export default function Counters() {
  return (
    <div
      style={{
        margin: "10px auto",
        height: "100px",
        width: "300px",
        border: "1px solid gray",
      }}
    >
      <p style={{ textAlign: "center" }}>Value</p>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button>Increment</button>
        <button>Decrement</button>
      </div>
    </div>
  );
}
