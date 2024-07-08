import { dataContext } from "./context/dataContext";
import { useEffect,useState } from "react";
import CardOne from "./components/cardOne";

export default function ReactContext() {
    const [count, setCount] = useState(0);
    const locked = count === 5 ? true : false;
  
    useEffect(()=>{
        console.log('this is react context')
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
    <dataContext.Provider value={{count,setCount,locked}}>
        <CardOne/>
    </dataContext.Provider>
  )
}
