import {createStore} from 'redux'
import counterreducer from './reducer'
const store=createStore(counterreducer);
export default store