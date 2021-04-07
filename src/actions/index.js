import { ADD_TODO , REMOVE_TODO , TOGGLE_TODO } from './constants'

export const addToDo = (data) =>{
    return {
        type: ADD_TODO,
        payload: {
            title : data.title,
            deadline : data.deadline,
        }
    }
}

export const removeToDo = (data)=>{
    return {
        type : REMOVE_TODO,
        payload : {
            id : data.id
        }
    }
}

export const toggleToDo = (data)=>{
    return{
        type : TOGGLE_TODO,
        payload : data.id
    }
}