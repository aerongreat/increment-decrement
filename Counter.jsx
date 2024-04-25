import React, {useState} from 'react';
function Counter(){

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className='div-container'>
     <p className='count-display'>{count}</p>
     <button className="containerbutton" onClick={decrement}>Decrement</button>
     <button className="containerbutton" onClick={reset}>Reset</button>
     <button className="containerbutton" onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter
