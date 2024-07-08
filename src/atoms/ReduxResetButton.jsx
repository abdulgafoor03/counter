import {ResetIcon} from '@radix-ui/react-icons';
import {useDispatch} from 'react-redux';
import {counting} from '../reducers/counter'

export default function ReduxResetButton() {
    const dispatch= useDispatch();

    const handleClick=(e)=>{
        
        
        dispatch(counting(0));
        e.currentTarget.blur();
    };

  return (
    <button className="reset-btn" onClick={handleClick}><ResetIcon></ResetIcon></button>
  )
}
