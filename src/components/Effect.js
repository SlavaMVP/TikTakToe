/*import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate (by default):
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `${count}`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example ;
*/
import React from 'react';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    /*initial */
    componentDidMount() {
      document.title = `${this.state.count}Mount`;
    }

    /*after it changes */
    componentDidUpdate() {
      document.title = `${this.state.count}Update`;
    }
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            Click me
          </button>
        </div>
      );
    }
  }

  export default Example ;