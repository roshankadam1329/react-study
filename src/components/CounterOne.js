import React, { useContext } from "react";
import CounterContext from "../context-api/CounterContext";

const CounterOne = () => {
    const {counterState, counterDispatch} = useContext(CounterContext);

    return <div style={{'border': '1px black'}}>
        <h2>Counter 1 :</h2>
        <button onClick={() => counterDispatch({type: 'COUNTER_ONE_INCREASE'})}>Increase</button>
        <button onClick={() => counterDispatch({type: 'COUNTER_ONE_DECREASE'})}>Decrease</button>
    </div>
}

export default CounterOne;