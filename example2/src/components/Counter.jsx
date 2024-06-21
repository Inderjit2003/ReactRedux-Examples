import React, { useState ,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, add, asyncAdd, addIfOdd } from '../redux/action';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);
  const [autoIncrementActive, setAutoIncrementActive] = useState(false); // State to track automatic increment

  // Automatically increment after async add
  useEffect(() => {
    let interval;
    if (autoIncrementActive) {
      interval = setInterval(() => {
        dispatch(increment());
      }, 2000); // Increment every 5 seconds
    }

    return () => clearInterval(interval);
  }, [dispatch, autoIncrementActive]);

  // Toggle automatic increment
  const toggleAutoIncrement = () => {
    setAutoIncrementActive(!autoIncrementActive);
  };
    // Async add with automatic increment
    const handleAsyncAdd = () => {
      dispatch(asyncAdd(Number(value)));
      toggleAutoIncrement(); // Start automatic increment after async add
    };
  
  return (
    <div >

      <center style={{marginTop:'20vh'}} >
      <h1 style={{color:'white'}}>{count}</h1>
       <input class="form-control m-4" style={{width:'40vh'}}
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant='danger' className='mx-2' onClick={() => dispatch(increment())}>Increment</Button>
      <Button variant='danger' className='mx-2'  onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button variant='danger' className='mx-2'  onClick={() => dispatch(add(Number(value)))}>Add</Button>
      {/* <button onClick={() => dispatch(asyncAdd(Number(value)))}>Async Add</button> */}
      <Button variant='danger' className='mx-2'  onClick={() => handleAsyncAdd()}>Async Add</Button> {/* Modified to call handleAsyncAdd */}

      <Button variant='danger' className='mx-2'  onClick={() => dispatch(addIfOdd(Number(value)))}>Add If Odd</Button>
      
      </center>
    </div>
  );
};

export default Counter;
