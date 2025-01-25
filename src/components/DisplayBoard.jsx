export default function DisplayBoard({ totalValue }) {
  return (
    <div
      style={{
        margin: "10px auto",
        height: "100px",
        width: "300px",
        border: "1px solid gray",
      }}
    >
      <p style={{ textAlign: "center" }}>Total Score is {totalValue}</p>
    </div>
  );
}
