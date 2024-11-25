import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  //In functional components just like class component this.state react converts useState in a object only.
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
