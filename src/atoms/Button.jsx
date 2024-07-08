import {MinusIcon, PlusIcon} from '@radix-ui/react-icons';

export default function Button({type, setCount,locked}) {
    const handleClick=()=>{
        setCount(prev=>{
            if(type==='plus'){
                const counter=prev+1;
                return counter>5 ?  5: counter;
            }
            if(type==='minus'){
                const counter=prev-1;
                return counter<0 ?  0: counter;
            }
        })
        
    }
  return (
    <button className='count-btn' onClick={handleClick} disabled={locked}>
        {type==='minus'?
       <MinusIcon className="count-btn-icon" />:<PlusIcon className="count-btn-icon" />
        }
    </button>
  )
}
