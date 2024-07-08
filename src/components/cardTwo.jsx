import Title from "../atoms/Title";
import Count from "../atoms/Count";
import ButtonContainer from "../atoms/ButtonContainer";
import ReduxButton from "../atoms/ReduxButton";
//redux consumption
import {useSelector} from 'react-redux';
import ReduxResetButton from "../atoms/ReduxResetButton";


export default function CardTwo() {

  const count=useSelector((state)=>state.counter.value);

  const locked = count === 5 ? true : false;


  return (

      <div className={`card ${locked ? "card--limit" : ""}`} >
        <h3 className="sub-head">Redux state</h3>
        <Title locked={locked} />
        <Count count={count} />
        <ReduxResetButton/>
        <ButtonContainer>
          <ReduxButton type="minus"  locked={locked} />
          <ReduxButton type="plus" locked={locked} />
        </ButtonContainer>
      </div>

  );
}
