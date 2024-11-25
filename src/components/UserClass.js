import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //this.props is set by the super class

    //best place to create state when we create instance of the class component
    //state is reserved keyword, it will contain all the state variables here only which are used in component. Its an object which holds all the state variables
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  // Functional Component => a function which returns jsx
  //Class Compoent=> a class where render() return jsx
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h4>Count : {count}</h4>
        <button
          onClick={() => {
            //DO NOT CHANGE STATE VARIABLES DIRECTLY ALWAYS USE this.setState()
            this.setState({ count: this.state.count + 1 });

            // this.setState() takes an object as argument & selectively updates the state value    mentioned. Suppose there are 10 state variables in this.state of this Component then this.setState({ count: this.state.count + 1 }); will only update count state variable value and other 9 variables value is not changed.

            // after this the component will re-render using reconciliation algo
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Hobbies: Coding</h3>
      </div>
    );
  }
}

export default UserClass;
