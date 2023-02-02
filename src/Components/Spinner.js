import React, { Component } from 'react'
import loading from '../Hourglass.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='position-absolute start-50'>
                <img src={loading} className="my-3" alt='Loading spinner' />
            </div>
        )
    }
}
