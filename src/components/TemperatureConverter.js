import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'
import { useState } from 'react';

function TemperatureConverter() {
    
    const [valueF, setValueF] = useState();
    const [valueC, setValueC] = useState();

    function convert(){
        console.log(valueC, valueF);
    }


    return ( 
        <div className='mainContainer'>
            <h1>Конвертер температуры</h1>
            <div className='inputFields'>
                <TextField id="tf1" label="C" variant="outlined" value={valueC} />
                <TextField id="tf2" label="F" variant="outlined" value={valueF} />
            </div>

            <Button variant="contained" onClick={convert}>Convert</Button>
        </div>
     );
}

export default TemperatureConverter;


function convertToC(value){
    return  (value * 9 / 5) + 32;
}
function convertToF(value){
    return  (value - 32) * 5 / 9;
}