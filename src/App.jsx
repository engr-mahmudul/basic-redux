import { useState } from "react";
import Counters from "./components/Counters";
import DisplayBoard from "./components/DisplayBoard";

const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
export default function App() {
  const [counter, setCounter] = useState(initialState);

  const handleIncriment = (counterId) => {
    const newCounter = counter.map((item) => {
      if (item.id === counterId) {
        item.value = item.value + 1;
        return item;
      } else {
        return item;
      }
    });
    setCounter(newCounter);
  };
  const handleDecriment = (counterId) => {
    const newCounter = counter.map((item) => {
      if (item.id === counterId) {
        item.value = item.value - 1;
        return item;
      } else {
        return item;
      }
    });
    setCounter(newCounter);
  };
  const totalValue = counter.reduce((accumulator, current) => {
    return accumulator + current.value;
  }, 0);
  return (
    <div>
      {counter.map((item) => (
        <Counters
          key={item.id}
          item={item}
          handleDecriment={handleDecriment}
          handleIncriment={handleIncriment}
        />
      ))}
      <DisplayBoard totalValue={totalValue} />
    </div>
  );
}
