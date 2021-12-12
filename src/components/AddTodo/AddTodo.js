import React from 'react'
import "./AddTodo.scss"
function AddTodo() {
    return (
        <div className="Add_todo">
            <input type="checkbox" className="checkboxIn" id="logoToggle"/>
            <form  action="" className="form">
                {/* <input type="radio"/> */}
                <div className="circle-btn"></div>
                <input type="text"  name="text" placeholder="Create a new todo.." />
            </form>
        </div>
    )
}

export default AddTodo
