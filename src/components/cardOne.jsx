//This card absorbs React context api
import Title from "../atoms/Title";
import Count from "../atoms/Count";
import ResetButton from "../atoms/ResetButton";
import ButtonContainer from "../atoms/ButtonContainer";
import Button from "../atoms/Button";
import { dataContext } from "../context/dataContext";
import { useContext } from "react";

export default function CardOne() {

 const {count,locked,setCount}=useContext(dataContext)
  return (
    
      <div className={`card ${locked ? "card--limit" : ""}`} >
         <h3 className="sub-head">Context API</h3>
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
