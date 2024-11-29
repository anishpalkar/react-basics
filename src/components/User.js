import { useState, useEffect } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  //In functional components just like class component this.state react converts useState in a object only.

  //How to have a cleanup function, to do work like ComponentWillUnmount? The function returned by the useEffect's callback is the cleanup function.
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("react useeffect op");
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-card">
      <h4>Count : {count}</h4>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Hobbies: Coding</h3>
    </div>
  );
};

export default User;
