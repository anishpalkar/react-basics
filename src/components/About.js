import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us.....</h1>
      <User name={"Anish (function)"} location={"Mumbai"} />

      <UserClass name={"Anish (class)"} location={"Mumbai"} />
    </div>
  );
};

export default About;
