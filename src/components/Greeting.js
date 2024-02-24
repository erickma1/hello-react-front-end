import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.message);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <h1 className="mt-2 text-center">{greeting}</h1>
  );
}
