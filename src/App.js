import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Virat from './Component/Virat'
import Reactdev from './Component/Reactdev';
import Counter from './Component/Counter';
function App() {
  return (
    <div className="App">
      <Virat />
      <Reactdev />
      <Counter />
    </div>
  );
}

export default App;
