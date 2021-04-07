import React , { useRef } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { addToDo , removeToDo, toggleToDo } from '../actions'
import './form.css'

function Form(){
    const titleRef = useRef(null)
    const calenderRef = useRef(null)
    const dispatch = useDispatch()
    const state = useSelector(state => state.todo)

    const handleSubmit = (e)=>{
        e.preventDefault()
        var indianTimeZoneVal = new Date(calenderRef.current.value).toLocaleString('en-US', {timeZone: 'Asia/Kolkata'});
        var indainDateObj = new Date(indianTimeZoneVal);
        indainDateObj.setHours(indainDateObj.getHours() + 5);
        indainDateObj.setMinutes(indainDateObj.getMinutes() + 30);
        const deadline = (indainDateObj.toDateString());
        const data = {
            title : titleRef.current.value,
            deadline
        }
        dispatch(addToDo(data))
        titleRef.current.value = ''
        calenderRef.current.value = ''
    }

    return (
        <>
            <div className="form__container">
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input className="form__control" ref={titleRef} type="text" placeholder="Title..." required />
                    <label>Deadline:</label>
                    <input className="form__control" ref={calenderRef} type="date" required min={new Date().getFullYear() + '-' + ("0" + (new Date().getMonth()+1)).slice(-2) + '-' + ("0" + new Date().getDate()).slice(-2) } />
                    <input className="form__submit" type="submit" value="Add" />
                </form>    
            </div> 
            <div className="cards__container">
                {
                    state.map((item)=>{
                        return (
                            <div className={`card ${item.completed ? 'active' : null}`} key={item.id}>
                                <div className="card__title">{item.title}</div>
                                <span className="date">{item.date}</span>&emsp;
                                <span className="deadline">{item.deadline}</span>&emsp;
                                <span className="delete__card" onClick={()=>dispatch(removeToDo(item))}>&times;</span>
                                <div className="toggle__container">
                                    <label htmlFor={`toggle${item.id}`}>
                                        <div className={`switch ${item.completed ? 'active' : null}`}></div>
                                    </label>
                                    <input id={`toggle${item.id}`} type="checkbox" onChange={()=>dispatch(toggleToDo(item))} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Form