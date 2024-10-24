import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'
import { useEffect, useState } from 'react';

function TemperatureConverter() {
    
    const [valueF, setValueF] = useState();
    const [valueC, setValueC] = useState();

    function convert(){
        
    }


    return ( 
        <div className='mainContainer'>
            <h1>Конвертер температуры</h1>
            <div className='inputFields'>
                <TextField id="tf" label="C" variant="outlined" value={valueC} />
                <TextField id="tf" label="F" variant="outlined" value={valueF} />
            </div>

            <Button variant="contained" onClick={convert}>Convert</Button>
        </div>
     );
}

export default TemperatureConverter;


