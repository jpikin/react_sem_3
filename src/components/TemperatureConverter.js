import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'

function TemperatureConverter() {
    
    const convert = () => {
        console.log('push');
    }
    
    
    return ( 
        <div className='mainContainer'>
            <h1>Конвертер температуры</h1>
            <div className='inputFields'>
                <TextField id="outlined-basic" label="C" variant="outlined" />
                <TextField id="outlined-basic" label="F" variant="outlined" />
            </div>

            <Button variant="contained" onClick={convert}>Convert</Button>
        </div>
     );
}

export default TemperatureConverter;
