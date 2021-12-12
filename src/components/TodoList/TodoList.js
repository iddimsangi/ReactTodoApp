import React from 'react'
import './TodoList.scss'
import TodoCard from './TodoCard/TodoCard'
function TodoList() {
    return (
        <div className="cardList">
            {/* <h1>list</h1> */}
            <TodoCard/>
            <TodoCard/>
            <TodoCard/>
            <div className="list-footer">
                <a href="#">3itemlefts</a>
                <div>
                    <a href="#">All</a>
                    <a href="#">Active</a>
                    <a href="#">Completed</a>
                </div>
                <a href="#">ClearCompleted</a>
            </div>
            <div className="last-div">
                <div>
                <a href="#">All</a>
                    <a href="#">Active</a>
                    <a href="#">Completed</a>
                </div>
              
            </div>
        </div>
    )
}

export default TodoList
