import React from 'react'

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        num: 3
      };  
    }
    render() {
        return (
            <div>
            <p>You clicked {this.state.count} times, but num is {this.state.num}</p>
            <button onClick={() => this.setState({ count: this.state.count + 1 })}>Click me</button>
            </div>
        )
           
          
      }
}
export default Example;