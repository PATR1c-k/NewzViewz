import React, { Component } from 'react'
import loading from '../Hourglass.gif'

function Spinner() {
    return (
        <div className='position-absolute start-50'>
            <img src={loading} className="my-3" alt='Loading spinner' />
        </div>
    )
}

export default Spinner