import React, { useState } from 'react'
import './todo.css'
import Task from './Task';
import {v4} from 'uuid';

export default function Todoform() {
    const [task,settask]=useState('');
    const [list,setlist]=useState([
        {id:v4(),name:"read book(Click Me)",done:false},
        {id:v4(),name:"sport",done:false},
        {id:v4(),name:"test",done:false},
        {id:v4(),name:"walking",done:false}
    ]);
    const Add=()=>{
        let tmp=[...list];
        let tmpt={};
        tmpt.id=v4();
        tmpt.name=task;
        tmp.push(tmpt);
        setlist(tmp)
        settask('')

    }
const dele=(idt)=>{
    let nlist=list.filter((t)=>{
        return t.id!=idt
    })
    setlist(nlist);
}

const verify=(id)=>{
    let arr = list.map((e)=>{
        if(e.id === id){
            e.done = !e.done;
        }
        return e;
    })
    setlist(arr)
    
}



  return (
    <div className='fd'>        
    <h1>Todo-list</h1>
    <br />
    <br />
    <h4>Chose a faire</h4>
    <br />
    <form action="">
    <input type="text" value={task} onChange={(e)=>settask(e.target.value)} /><br />
    <input type="button" value="Ajouter" onClick={Add} /> 
    </form>



<br /><br />
liste des taches: 
<br />
<ul>
    {list.map((item)=>{
        return <li key={item.id} className={item.done?'true':'f'} ><Task del={()=>dele(item.id)} task={item.name} st={()=>verify(item.id)}/></li>}
        )}
    
</ul>
 <br />


</div>
  )
}
