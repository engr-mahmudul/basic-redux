import Button from "./Button";

export default function Counters({ item }) {
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
        <Button label="Increment" isIncrement={true} id={item.id} />
        <Button label="Decrement" isIncrement={false} id={item.id} />
      </div>
    </div>
  );
}
