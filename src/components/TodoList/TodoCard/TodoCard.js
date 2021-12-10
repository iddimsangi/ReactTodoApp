import React from 'react'
import checkmark from '../../../images/icon-check.svg'
import crossmark from '../../../images/icon-cross.svg'
import "./TodoCard.scss"
function TodoCard() {
    return (
        <div className="todo_card">
           <div className="container">
               <span className="circle">
               <img src={checkmark} alt="checkmark icon" />
               </span>
            <p>text here</p>
           </div>
         
           <img src={crossmark} className="cross-icon" alt="crossmark" />
        </div>
    )
}

export default TodoCard
