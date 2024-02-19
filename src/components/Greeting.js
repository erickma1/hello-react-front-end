import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/greetings/greetingsSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((state) => state.greetings);

  useEffect(() => {
    dispatch(fetchData());
  },
  [dispatch]);

  const handleClick = () => {
    dispatch(fetchData());
  };

  if (isLoading) {
    return (
      <>
        <div className="loading">...isLoading</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="error">
          error...
        </div>
      </>
    );
  }

  return (
    <>
      <div>Random Greeting</div>
      <div>{greeting}</div>
      <button type="button" onClick={handleClick}>Get new greeting</button>
    </>
  );
}

export default Greeting;
