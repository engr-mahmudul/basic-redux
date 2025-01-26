import { useDispatch } from "react-redux";
import { decrement, increment } from "../features/counters/countersSlice";
export default function Button({ label, isIncrement, id }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    console.log("yes");
    if (isIncrement) {
      dispatch(increment(id));
    } else {
      dispatch(decrement(id));
    }
  };

  return (
    <button
      style={{
        backgroundColor: isIncrement ? "green" : "red",
        color: "white",
        padding: "7px",
        borderRadius: "10px",
      }}
      onClick={() => clickHandler()}
    >
      {label}
    </button>
  );
}
