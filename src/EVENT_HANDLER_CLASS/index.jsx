import React, { Component } from 'react'

class EVENT_HANDLER_CLASS extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             changedValue : ''
        }
    }
    

    handleClick = () => {
        console.log ("clicked")
    }

    handleOnChange = (e) => {
       this.setState({
            changedValue : e.target.value
       }, ()=> {console.log(this.state.changedValue)})
       
    }
        
      
    render() {
        const {changedValue} = this.state.changedValue
        return (
            <div>
                <div>
                    <button onClick={this.handleClick}>Click here</button>
               </div>
               <br />
               <div>
                    <input type="text" onChange={this.handleOnChange} />
                    <p>{changedValue}</p>
               </div>
            </div>
        )
    }
}
export default EVENT_HANDLER_CLASS ;
