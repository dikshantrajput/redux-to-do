import React , { useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addToDo , removeToDo, toggleToDo } from '../actions'

function Form(){
    const titleRef = useRef(null)
    const dispatch = useDispatch()
    const state = useSelector(state => state.todo)

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            title : titleRef.current.value
        }
        dispatch(addToDo(data))
        titleRef.current.value = ''
    }

    return (
        <>
            <div className="form__container">
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input className="form__control" ref={titleRef} type="text" placeholder="Title..." />
                    <input className="form__submit" type="submit" value="Add" />
                </form>    
            </div> 
            <ul>
                {
                    state.map((item)=>{
                        return (
                            <li key={item.id}>
                                <span>{item.title}</span>&emsp;
                                <span>{item.date}</span>&emsp;
                                <span>{item.completed ? 'Done' : 'Not Done'}</span>&emsp;
                                <span><button onClick={()=>dispatch(removeToDo(item))}>Remove</button></span>
                                <span><button onClick={()=>dispatch(toggleToDo(item))}>Toggle</button></span>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Form