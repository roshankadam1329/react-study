import { BUY_ICE_CREAM, CREATE_ICE_CREAM } from "../reduxConstants"

const initialState = {
  numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch (action.type) {
        case  BUY_ICE_CREAM:
        return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        case CREATE_ICE_CREAM:
        return {
            ...state,
            numOfIceCreams: state.numOfIceCreams + action.payload
        }
        default:
        return state
    }
}

export default iceCreamReducer;