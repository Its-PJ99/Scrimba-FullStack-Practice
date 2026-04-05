import React from 'react'; 
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({ count: this.state.count - 1 });
        }}>-</button>
        {this.state.count}
        <button onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>+</button>
      </div>
    );
  }
}

const domElement = document.getElementById('root')

ReactDOM.render(<Counter />, domElement)