import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'
import { useState } from 'react';

function TemperatureConverter() {
    
    const [valueF, setValueF] = useState('');
    const [valueC, setValueC] = useState('');

    const convert = (e) =>{
        if (!valueC && !valueF) {
            alert("Одна температура должна быть заполнена!")
        }
        else if (valueC && valueF) {
            setValueC('');
            setValueF('');
            alert("Только одна температура должна быть заполнена!")
        } else if (isNaN(valueC) || isNaN(valueF)) {
            alert("Введите числовое значение!")
            setValueC('');
            setValueF('');
        } else if (valueC) {
            setValueF(convertToF(valueC));
        } else if (valueF) {
            setValueC(convertToC(valueF));
        }  
        
    }
    const takeValueC = (e) => {
        setValueC(e.target.value);
        
    }
    const takeValueF = (e) => {
        setValueF(e.target.value);
    }
    const reset = (e) => {
        setValueC('');
        setValueF('');
    }

    return ( 
        <div className='mainContainer'>
            <h2>Конвертер температуры</h2>
            <div className='inputFields'>
                <TextField id="tf1" label="C" variant="outlined" onChange={takeValueC} value={valueC} />
                <TextField id="tf2" label="F" variant="outlined" onChange={takeValueF} value={valueF} />
            </div>

            <Button variant="contained" onClick={convert}>Convert</Button>
            <Button variant="contained" onClick={reset}>Reset</Button>
        </div>
     );
}

export default TemperatureConverter;


function convertToC(value){
    return  (value - 32) * 5 / 9;
}
function convertToF(value){
    return  (value * 9 / 5) + 32;
}