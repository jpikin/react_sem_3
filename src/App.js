import './App.css';
import Greetings from './components/Greetings';
import TemperatureConverter from './components/TemperatureConverter';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {


  return (
    <div className="App">
      <ThemeSwitcher />
      <TemperatureConverter />
      
    </div>
  );
}

export default App;
