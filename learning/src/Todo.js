import React from 'react'

export const Todo = ({todo}) => {
    console.log(todo.task);

    return (
        <div>
            <p> {todo.task} </p>
        </div>
    )
}
