import './App.css';
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
