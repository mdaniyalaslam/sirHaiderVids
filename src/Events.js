import React, { Component } from 'react';

import Counter from "./Counter"

class MyEvents extends Component {

    constructor(props){
        super(props)
        this.state={
            counter : 0
        }
        // this.incrementCounter = this.incrementCounter.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
        this.decrementCounter = this.decrementCounter.bind(this)
        
    }
    // incrementCounter(){
    //     this.setState({
    //         counter: this.state.counter+1
    //     })
    // }

    incrementCounter(){
        // console.log("increment")
        if (this.state.counter <= 11){
            this.setState({counter : this.state.counter + 1})
        }
        else console.log("Maximum range reached!")
    }
    
    decrementCounter(){
        // console.log("decrement")

        if (this.state.counter === 0){
            console.log('Maximum range reached!')
        }
        else
        this.setState({counter : this.state.counter - 1})

    }


    render(){
        return(
            <div>

            <Counter counter= {this.state.counter} increment={this.incrementCounter} decrement={this.decrementCounter} />



            {/* <h1>MyEvents</h1> */}
            {/* <button onClick={this.clickHandler}>First Button</button> */}

            {/* <button onClick = {this.incrementCounter.bind(this)}>+</button>     */}
            {/* <span>{this.state.counter}</span> */}
            {/* <button onClick = {this.incrementCounter}>+</button>       */}
            
            </div>
        )
    }
}
export default MyEvents;