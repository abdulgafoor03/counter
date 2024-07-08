import { useEffect, useState } from "react";
import Title from "../atoms/Title";
import Count from "../atoms/Count";
import ResetButton from "../atoms/ResetButton";
import ButtonContainer from "../atoms/ButtonContainer";
import Button from "../atoms/Button";

export default function Card() {

  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(()=>{
    const handleKeydown = (event) => {
        if (event.code === "Space") {
          const newCount = count + 1;
          if (newCount > 5) {
            setCount(5);
            return;
          }
          setCount(newCount);
        }
      };
      window.addEventListener("keydown", handleKeydown);
      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
      

  },[count])
  return (

      <div className={`card ${locked ? "card--limit" : ""}`} >
        <h3 className="sub-head">Regular prop</h3>
        <Title locked={locked} />
        <Count count={count} />
        <ResetButton setCount={setCount} />
        <ButtonContainer>
          <Button type="minus" setCount={setCount} locked={locked} />
          <Button type="plus" setCount={setCount} locked={locked} />
        </ButtonContainer>
      </div>

  );
}
