import React from 'react'
import "./AddTodo.scss"
function AddTodo() {
    return (
        <div className="Add_todo">
            <form action="" className="form">
                <input type="radio"/>
                <input type="text"  name="text" placeholder="Create a new todo.." />
            </form>
        </div>
    )
}

export default AddTodo
