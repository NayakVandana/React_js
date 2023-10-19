import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={
     count:0
    }
  }
  componentDidUpdate(preProps,preState,snapshot)
  {
    // console.warn("componentDidUpdate",preState)

    console.warn("componentDidUpdate",preState.count,this.state.count,snapshot) //snapsshot tyare j call thase jyare getSnapshotBeforeUpdate() baki undefine aavse
    // if(preState.count===this.state.count){
    //   alert("data is alreday same")
    // }
    if(this.state.count<10){
      this.setState({count:this.state.count+1})
    }
   
  }
  render()
  {
    // console.warn("render")

    return (
      <div className="App">
        <h1>Component Did Mount {this.state.count}</h1>
        {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button> */}
        <button onClick={()=>this.setState({count:1})}>Update</button>
      </div>
    );
  }
}

export default App;