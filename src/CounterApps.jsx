/* eslint-disable no-self-assign */
/* eslint-disable no-const-assign */
import { useCounter } from "./hook/useCounter";

export const CounterApps = () => {

    const {counter, increment, decrement, reset} = useCounter(0);

  return (
    <>
    <h1>Contador</h1>
    <h4>{counter}</h4>

    <button className="btn btn-info" onClick={() =>increment()}>+1</button>
    <button className="btn btn-info" onClick={() =>decrement(1, false)}>-1</button>
    <button className="btn btn-danger" onClick={reset}>Reset</button>
    </>
  )
}
