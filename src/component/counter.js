import React,{Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state ={count:0}
    }

Increment(){
    this.setState({
        count:this.state.count+1
    })
}

Decrement(){
    this.setState({
        count:this.state.count-1
    })
}
    render() {
       return(
        <div>
           <h1>Counter App</h1>
           <h4>{this.state.count}</h4>
           <button onClick={() => this.Increment()} className="btn btn-primary">Increment</button>
           <button onClick={() => this.Decrement()} className="btn btn-primary">Decrement</button>
        </div>
       );
    }
}


export default Counter;