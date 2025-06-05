import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useIceCreamDispatch from "../redux/ice-cream/useIceCreamDispatch";

const IceCreamComponent = ({numberOfIcecream}) => {

    const iceCreamCount = useSelector(state => state.iceCream.numOfIceCreams)
    
    const {buyIceCream, refreshIceCreamStock} = useIceCreamDispatch();

    return <div>
        <h2>Available Icecream - {iceCreamCount}</h2>
        <button onClick={ () => buyIceCream()}> Buy Icecream</button>
    </div>
}

export default IceCreamComponent;