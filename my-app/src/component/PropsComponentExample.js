import React, { Component} from 'react';

class PropsComponentUpdate extends Component{
 
  shouldComponentUpdate(nextProps){
    if(this.props ===nextProps){
      return false;
    }
    return true;
  }

  
  render(){
    return <div>Props를 받는 컴포넌트 {this.props.count}</div>
  }

}
export default PropsComponentUpdate;