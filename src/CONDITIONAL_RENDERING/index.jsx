import React, { Component } from 'react'
import LogInPage from './LogInPage'
import HomePage from './HomePage'

export default class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        const {isLoggedIn} = this.state
        return (
            <div>
                {isLoggedIn ? <HomePage /> : <LogInPage />}
            </div>
        )
    }
}
