import React, {useState} from 'react';
import './styles.css';

function App() {
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  return (
    <>
      <div className="hero">
        <h1>Hello, This is a Random Number Selector.</h1>
        <div className='container'>
          <div className='randomNum'>
            <p>
              Random Number: <span>{}</span>
            </p>
          </div>
          <div className='numContainer'>
            <div>
              <p>Min:</p>
              <input
                type='number'
                value={minNum}
                onChange={(e) => setMinNum(+e.target.value)}
              />
            </div>
            <div>
              <p>Max:</p>
              <input
                type='number'
                value={maxNum}
                onChange={(e) => setMaxNum(+e.target.value)}
              />
            </div>
          </div>
          <button>Get Random Number</button>
        </div>
      </div>
    </>
  );
}

export default App;
