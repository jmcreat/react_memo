import React, { Component} from 'react';
import './App.css';
import PropsComponentExample from './component/PropsComponentExample';
import NoPropsComponentExample from './component/NoPropsComponentExample';


class App extends Component{
  state = {
    count : 0
  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        count:this.state.count+1
      })
    },500)
  }
  render(){
    return (
      <div className="App">hello
        <PropsComponentExample count={this.state.count} />
        <NoPropsComponentExample/>
      </div>
    )
  }
}
export default App;