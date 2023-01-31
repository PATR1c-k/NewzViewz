import React, { Component } from 'react'
import loading from '../Hourglass.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div className='position-absolute top-50 start-50'>
                <img src={loading} alt='Loading spinner' />
            </div>
        )
    }
}
