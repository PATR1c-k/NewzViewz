import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
// import Spinner from './Spinner'


export default class App extends Component {
    render() {
        return (
            <div>
                {/* <h1>Hello Class based component {this.c}</h1> */}
                <Navbar />
                {/* <Spinner /> */}
                <News pageSize="20" />
            </div>
        )
    }
}
