import React,{useState} from 'react';

function Counter() {

    const[count,setCount] = useState(0);
  
    const start = () => {
        setCount(count+1);
    }
    const stop = () => {
        setCount(count-1);
    }
    const reset = () => {
        setCount(0);
    }
  return (
    <>
    <div className='counter-container'>
 
        <p>{count}</p>
      
        <button className='btn-start' onClick={start}>START</button>
        <button className='btn-reset' onClick={reset}>RESET</button>
        <button className='btn-stop' onClick={stop}>STOP</button>
    </div>
    </>
  )
}

export default Counter;

/* 
    
    */