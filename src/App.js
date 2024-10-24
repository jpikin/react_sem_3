import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import ThemeSwitcher from './components/ThemeSwitcher';
import TodoList from './components/TodoList';

function App() {


  return (
    <div className="App">
      {/* <ThemeSwitcher /> */}
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
