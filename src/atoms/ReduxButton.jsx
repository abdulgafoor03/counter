import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { useDispatch, useSelector } from "react-redux";
import { counting } from "../reducers/counter";
import { useEffect, useState } from "react";

export default function ReduxButton({ type, locked }) {
  const dispatch = useDispatch();
  //   to set initial value of count-getting value from redux state
  const initialCount = useSelector((state) => state.counter.value);
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((prev) => {
      if (type === "plus") {
        const counter = prev + 1;
        return counter > 5 ? 5 : counter;
      }
      if (type === "minus") {
        const counter = prev - 1;
        return counter < 0 ? 0 : counter;
      }
    });
  };
  useEffect(() => {
    dispatch(counting(count));
  }, [count]);
  return (
    <button className="count-btn" onClick={handleClick} disabled={locked}>
      {type === "minus" ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
