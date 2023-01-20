import React from 'react'

export default function Task({task,del,st}) {
    
  return (
    <div >
         <input type="text"  className='rr' readOnly value={task} onClick={st}/>
         <input type="button" value="delete" className="delete" onClick={del} /> 
    </div>
  )
}
