import { useDispatch } from "react-redux"
import { buyIceCreamAction, createIceCreamAction } from "./iceCreamActions"


const useIceCreamDispatch = () => {
    const dispatch = useDispatch()
    
    const buyIceCream = () => dispatch(buyIceCreamAction)
    const refreshIceCreamStock = () => dispatch(createIceCreamAction())

    return {buyIceCream,  refreshIceCreamStock};
}

export default useIceCreamDispatch;