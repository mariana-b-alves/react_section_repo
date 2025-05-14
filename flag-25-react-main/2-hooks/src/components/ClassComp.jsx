import { Component } from 'react';

export class ClassComp extends Component {

    state = {
        name: ''
    }

    handleChange = (evt) =>{
        this.setState({name: evt.target.value})
    }

  render() {
    const {name} = this.state;

    return (
      <div>
        <h1>Class:</h1>
        <p>My name is: {name}</p>
        <input type="text" value={name} onChange={this.handleChange}/>
      </div>
    )
  }
}

export default ClassComp;