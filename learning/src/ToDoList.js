import React from 'react'
import { Todo } from './Todo'

export const ToDoList = ({toDoList}) => {
    return (
        <div>
            <h1> List: </h1>
            {toDoList.map(todo => {
               return (
                   <Todo todo={todo} />
               )
           })}
        </div>
    )
}
