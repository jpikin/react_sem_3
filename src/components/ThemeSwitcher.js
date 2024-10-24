import {useState} from 'react';
import Greetings from './Greetings';
import '../App.css'



export default function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');
    
    function changeTheme(){
        theme === 'light' ? setTheme('dark') : setTheme('light')
        
    }
    
    return ( 
        <>
            <Greetings themeColor={theme} name='Boris' />
            <button onClick={changeTheme}>theme</button>
        </>
     );
    }
    



