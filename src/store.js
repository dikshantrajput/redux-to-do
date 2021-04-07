import { createStore } from 'redux'
import allReducers from './reducers'

const currentState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {} 
const store = createStore(allReducers,currentState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
    localStorage.setItem('reduxState',JSON.stringify(store.getState()))
})

export default store