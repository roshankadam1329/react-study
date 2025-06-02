import { combineReducers } from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './ice-cream/iceCreamReducer';
const rootReducer =  combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
});

export default rootReducer;
// This rootReducer combines all the individual reducers into one