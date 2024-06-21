import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment , decrement} from './redux/action';
export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <center style={{marginTop:'30vh'}}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      </center>
      
    </div>
  )
}
