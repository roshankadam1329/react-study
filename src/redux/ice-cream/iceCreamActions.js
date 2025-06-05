import { BUY_ICE_CREAM, CREATE_ICE_CREAM } from "../reduxConstants";

export const buyIceCreamAction = () => {
    return {
        type: BUY_ICE_CREAM
    };
}

export const createIceCreamAction = (count = 5) => {
    return {
        type: CREATE_ICE_CREAM,
        payload: count
    };
}