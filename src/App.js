import logo from './logo.svg';
import './App.css';
import { MyGoals } from './components/GoalList';
import {Headerz} from './components/Header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Headerz></Headerz>
        <h1 class= "text-center bg-secondary text-light mt-1 p-3">
          My Goals For This Book2
        </h1>
        <MyGoals></MyGoals>

        
      </header>
    </div>
  );
}

export default App;
