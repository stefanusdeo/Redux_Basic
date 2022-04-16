import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../redux/Counter';

const Counter = () => {
  const dispatch = useDispatch();
  const conter = useSelector((state) => state.counter.conter);
  const show = useSelector((state) => state.counter.showNumber);

  const addAngka = () => {
    dispatch(counterActions.add());
  };

  const addDynamicValue = () => {
    dispatch(counterActions.dynamic(10));
  };

  const minAngka = () => {
    dispatch(counterActions.min());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{conter}</div>}
      <div>
        <button onClick={addAngka} className={classes.counterButton}>
          Add
        </button>
        <button onClick={addDynamicValue} className={classes.counterButton}>
          Add Dynamic Value
        </button>
        <button onClick={minAngka} className={classes.counterButton}>
          Min
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
