
export const counterState = {
    counterOne: 0,
    counterTwo: 0
}

export const counterReducer = (state, action) => {
    switch (action.type) {
        case 'COUNTER_ONE_INCREASE':
            return { ...state, counterOne: state.counterOne + 1 }
        case 'COUNTER_ONE_DECREASE':
            return { ...state, counterOne: state.counterOne - 1 }
        case 'COUNTER_TWO_INCREASE':
            return { ...state, counterTwo: state.counterTwo + 1 }
        case 'COUNTER_TWO_DECREASE':
            return { ...state, counterTwo: state.counterTwo - 1 }
        default:
            return state
    }
}