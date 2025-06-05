import React from "react";
import { buyCake } from '../redux/cakes/CakeActions'
import { connect } from "react-redux";

const CakeComponent = ({numberOfCakes, buyCake}) => {

    return <div>
        <h2> Available Cakes - {numberOfCakes}</h2>
        <button onClick={() => buyCake()}> Buy Cake</button>
    </div>
}

const mapPropsToState = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(mapPropsToState, mapPropsToDispatch)(CakeComponent);