import todoreducer from './todo'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    todo:todoreducer
})   

export default allReducers