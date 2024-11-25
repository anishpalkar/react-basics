import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    console.log("Parent Constructor");
    super(props);
  }

  componentDidMount() {
    //it is called after component is rendered initially (completes mounting on dom)
    //Its like a useEffect, and here we make the API Calls.
    console.log("Parent ComponentDidMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us.....</h1>
        <UserClass name={"Anish First (class) "} location={"Mumbai"} />
        <UserClass name={"Anish Second (class) "} location={"Mumbai"} />
        <UserClass name={"Anish Third (class) "} location={"Mumbai"} />
      </div>
    );
  }
}

export default About;
