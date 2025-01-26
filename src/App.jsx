import { useSelector } from "react-redux";
import Counters from "./components/Counters";
import DisplayBoard from "./components/DisplayBoard";

export default function App() {
  const counters = useSelector((state) => state.counters);

  
  const totalValue = counters.reduce((accumulator, current) => {
    return accumulator + current.value;
  }, 0);
  return (
    <div>
      {counters.map((item) => (
        <Counters
          key={item.id}
          item={item}
          
        />
      ))}
      <DisplayBoard totalValue={totalValue} />
    </div>
  );
}
