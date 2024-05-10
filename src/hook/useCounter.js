import { useState } from "react";

export const useCounter = (value) => {

    const [counter, setCounter] = useState(value);

    const increment = (difect = 1 ) => setCounter(counter + difect);

    const decrement = (difect = 1, permiso ) => { 
        if(!permiso && counter <= 0) {
            return setCounter(0);
        }else setCounter(counter - difect);
    } 

    const reset = () => setCounter( value );

    return {
        counter,
        increment,
        decrement,
        reset
    }
}