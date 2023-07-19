
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementNum, decrementNum } from './action/index'

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculation in React Redux</h2>
        <div className='calculation_block'>
          <button onClick={() => dispatch(decrementNum())}>-</button>
          <input type='text' value={myState} />
          <button onClick={() => dispatch(incrementNum())}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
