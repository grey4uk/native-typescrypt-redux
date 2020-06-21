import {createStore} from 'redux';
import {reducer} from './rootReducer';

// const configureStore=()=>{
//     const store=createStore(rootReducer);
//     return store;
// }
const store=createStore(reducer);

export default store;