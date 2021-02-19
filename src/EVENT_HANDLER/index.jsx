import React, { Component } from 'react'

export default class EVENT_HANDLER extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

/**
 * In case of regular function we should use bind(this) in return() to avoid the error 
 * setState of undefined
 */
    handleClick(){
        this.setState({
            count : this.state.count + 1
        })
    }

    /**
     * In case of ES6 function no need to bind()
     */
    handleClick =() => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        // const {count} = this.state.count
        return (
            <div>
               <h1>{this.state.count}</h1>
               <button onClick={this.handleClick.bind(this)}>Increase</button>
               {/* { /* <button onClick={this.handleClick}>Increase</button> * /  } */}
               {/* /**
                * In case we use ES6 we don't need to bind(this) in return()
                * / */}
            </div>
        )
    }
}
