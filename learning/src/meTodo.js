import React from 'react'
import { useState } from 'react'
import {Table} from './Table'

export const MeTodo = () => {

    const [state, setState] = useState({
        Name:'',
        Age:'',
        Data:[]
    })

    const changeHandler = (e) => {
        setState({...state,[e.target.name]:e.target.value})
    }

    const clickHandler = (e) =>{
        e.preventDefault()
        if(state.id===undefined){
            const FinalData = {
            id:state.Data.length,
            Name: state.Name,
            Age: state.Age
        }
        setState({
            Data:[...state.Data,FinalData],
            Name:"",
            Age:""
        })
        const ran = JSON.stringify(state.Data)
        localStorage.setItem("Data",state.Data)
    }else{
        const update = state.Data.map((data)=>{
            if(data.id===state.id){
                data.Name = state.Name
                data.Age = state.Age
            }
            return data
        })
        setState({
            Data:[...update],
            Name:"",
            Age:"",
            id:undefined
        })
    }
    }

    const onRemove = (e,index) => {
        e.preventDefault()
        const result = state.Data.filter(data => data.id!== index )
        setState({
            Data:result
        })
    }

    const onEdit = (e,xx) => {
        e.preventDefault()
        setState({
            Data:[...state.Data],
            Name:xx.Name,
            Age:xx.Age,
            id: xx.id
        })
        
    }

    return (
        <div>
            <h1> Hey! </h1>
            <label> Name: </label>
            <input type="text" value={state.Name} name="Name" onChange={(e)=>{changeHandler(e)}}/> <br/><br/>
            <label> Age: </label>
            <input type="text" value={state.Age} name="Age" onChange={(e)=>{changeHandler(e)}}/> <br/><br/>
            <button onClick={(e)=>{clickHandler(e)}} className="btn btn-primary"> {state.id!==undefined?"UPDATE!":"INPUT"}</button>
            <Table 
            data={state.Data} 
            onRemove={(e,index)=>onRemove(e,index)}
            onEdit={(e,xx)=>onEdit(e,xx)}
            />
        </div>
    )
}
