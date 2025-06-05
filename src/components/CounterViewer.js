import React, { useContext } from "react";
import SampleContext from "../context-api/sampleContext";
import CounterContext from "../context-api/CounterContext";

const CounterViewer = () => {

    const context = useContext(CounterContext)
    const {counterState} = context;
    return <div>
        {/* <hr/>
        {value} */}
        <hr/>
        <h1> Current values</h1>
        <h2> Counter 1 : {counterState.counterOne}</h2>
        <h2> Counter 2 : {counterState.counterTwo}</h2>
    </div>
};

export default CounterViewer;