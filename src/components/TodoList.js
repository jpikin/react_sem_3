import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../App.css'
import { useState, React } from 'react';


export default function TodoList() {

    const [task, setTask] = useState('');
    const[cards, setCards] = useState(['task1', 'task2', 'task3'])
    const addTask = () =>{
        setCards([...cards, task])
        setTask('')
    }
    const takeTask = (e) => {
        setTask(e.target.value);
    }

    



    return ( 
        <>
        <h2 className='task_two_lable'>Список дел</h2>
        <div className='mainContainer'>
            <TextField id="tf" label="add task" variant="outlined" onChange={takeTask} value={task} />
            <Button variant="contained" onClick={addTask}>Add task</Button>
            <ul className='todoList'>
                {cards.map((el, index=0) => 
                 <li key={index++}><Card variant="outlined">{el}</Card></li>
                
            )}</ul>
            
        </div>


        </>
     );
}

 