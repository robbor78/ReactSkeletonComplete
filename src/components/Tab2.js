import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onClick as onClickAction } from '../store/actions/Actions.js';

const Tab2 = (state) => {

  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <>
      <p>Tab2 contents {count}</p>
      <button onClick={() => dispatch(onClickAction())} >Increment</button>
    </>
  );
}

export default Tab2;