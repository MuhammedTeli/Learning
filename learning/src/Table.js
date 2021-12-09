import React from 'react'

export const Table = (props) => {
    return (
        <div>
            
                <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                {props.data?.map((xx)=>{
                  return <tr>
                    <th scope="row">{xx.id}</th>
                    <td>{xx.Name}</td>
                    <td>{xx.Age}</td>
                    <td><button  onClick={(e)=>{props.onEdit(e,xx)}} className="btn btn-warning"> Edit </button></td>
                    <td><button onClick={(e)=>{props.onRemove(e,xx.id)}} className="btn btn-danger"> Delete </button></td>
                    <td></td>
                  </tr>
            })}
                </tbody>
              </table>
        </div>
    )
}

