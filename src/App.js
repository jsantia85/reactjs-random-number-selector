import React from 'react';
import ReactDom from 'react-dom/client';
import './styles.css';

function App() {

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

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
