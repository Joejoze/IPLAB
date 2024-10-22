import React, { Component } from "react";
import "./App.css";

// Counter Component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialCount, // Initialize count from props
    };
  }

  // Increment the count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Decrement the count
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

// App Component
function App() {
  return (
    <div className="App">
      <h1>React Counter App</h1>
      <Counter initialCount={0} /> {/* Pass initialCount as a prop */}
      <Counter initialCount={10} /> {/* Pass a different initialCount as a prop */}
    </div>
  );
}

export default App;