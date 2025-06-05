import React, { useContext } from "react";
import CounterContext from "../context-api/CounterContext";

const CounterTwo = () => {

    const {counterDispatch} = useContext(CounterContext);

    return <div style={{'border': '1px black'}}>
        <h2>Counter 2 :</h2>
        <button onClick={() => counterDispatch({type: 'COUNTER_TWO_INCREASE'})} >Increase</button>
        <button onClick={() => counterDispatch({type: 'COUNTER_TWO_DECREASE'})} >Decrease</button>
    </div>
}

export default CounterTwo;