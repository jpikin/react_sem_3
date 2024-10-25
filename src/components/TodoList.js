import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

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

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };



    return ( 
        <>
        <h2 className='task_two_label'>Список дел</h2>
        <div className='mainContainer'>
            <TextField id="tf" label="add task" variant="outlined" onChange={takeTask} value={task} />
            <Button variant="contained" onClick={addTask}>Add task</Button>
            <ul className='todoList card card-w'>
                {cards.map((el, index=0) => 
                <li key={index++}>
                    
                    <Card variant="outlined" className='card'>{el}  
                    <DeleteIcon onClick={handleDelete}/>

                    </Card>
                </li>)}
            </ul>
        </div>


        </>
     );
}

 