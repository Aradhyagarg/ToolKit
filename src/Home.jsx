import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByValue, decrement } from './Reducers';

const Home = () => {
    const dispatch = useDispatch();
    const { c } = useSelector(state => state.custom);

    const addBtn = () => {
        dispatch(increment());
    };

    const incrementBy = () => {
        dispatch(incrementByValue(25));
    };

    const subBtn = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1>{c}</h1>
            <button onClick={addBtn}>Increment</button>
            <button onClick={incrementBy}>IncrementBy</button>
            <button onClick={subBtn}>Decrement</button>
        </div>
    );
};

export default Home;
