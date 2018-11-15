import React, { Component } from "react";

class Counter extends Component {
  //Life cycle Hook Component did update
  //potential optimisation technique
  componentDidUpdate(prevProps, PrevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", PrevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call and get new data from the server
    }
  }
  //Life cycle hook: Component Unmounted
  //This is when component is unounted from the DOM. (ie if updated) and
  //good place to do clean up e.g. timers/listeners can be cleaned up before component is removed from DOM otherwise we can end up with memory leaks
  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    console.log("Counter Rendered");
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
