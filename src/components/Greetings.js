function Greetings(props) {

        
    return ( 
        <div>
            <p className={ props.themeColor === 'dark'? 'dark' : 'light'}>Привет {props.name}</p>
        </div>
     );
}

export default Greetings;