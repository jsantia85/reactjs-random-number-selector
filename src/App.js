import React, {useState} from 'react';
import './styles.css';

function App() {
  const [minNum, setMinNum] = useState(1);
  const [maxNum, setMaxNum] = useState(10);
  const [randomNum, setRandomNum] = useState();

  const handleRandomNum = () => {
    setRandomNum(
        // Math floor rounds to the nearest whole number, so no floats
        Math.floor(
            //This is the actual code that generates a random num, uses the values that the user sets
            Math.random() * (maxNum - minNum + 1) + minNum
          )
      )
  }
  return (
    <>
      <div className="hero">
        <h1>Random Number Generator</h1>
        <div className='container'>
          <div className='randomNum'>
            <p>
              Random Number: <span>{randomNum}</span>
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
          <button onClick={handleRandomNum}>Get Random Number</button>
        </div>
      </div>
    </>
  );
}

export default App;
