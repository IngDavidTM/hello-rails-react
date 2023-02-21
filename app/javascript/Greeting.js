import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from './reducers/greetings';

const Greeting = () => {
    const dispatch = useDispatch();
    const greetings = useSelector((state) => state.greetings);
    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);
    return <h2 className="hello">{greetings.greetings.message}</h2>
};

export default Greeting;