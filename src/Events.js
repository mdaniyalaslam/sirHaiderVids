import React, { Component } from 'react';

class MyEvents extends Component {

    constructor(props){
        super(props)
        this.state={
            counter : 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        
    }

    // clickHandler(){
    //     console.log('click Passed');
    // }

    incrementCounter(){
        this.setState({
            counter: this.state.counter+1
        })
    }


    render(){
        return(
            <div>
            <h1>MyEvents</h1>
            {/* <button onClick={this.clickHandler}>First Button</button> */}

            <button onClick = {this.incrementCounter.bind(this)}>+</button>    
            <span>{this.state.counter}</span>
            <button onClick = {this.incrementCounter}>+</button>      
            
            </div>
        )
    }
}
export default MyEvents;