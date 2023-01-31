import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Router>
                    <Routes>
                        <Route exact path="/home" element={<News pagesize="6" country="in" category="general" />} />
                        <Route exact path="/business" element={<News pagesize="6" country="in" category="business" />} />
                        <Route exact path="/entertainment" element={<News pagesize="6" country="in" category="entertainment" />} />
                        <Route exact path="/healthscience" element={<News pagesize="6" country="in" category="healthscience" />} />
                        <Route exact path="/sports" element={<News pagesize="6" country="in" category="sports" />} />
                        <Route exact path="/technology" element={<News pagesize="6" country="in" category="technology" />} />
                    </Routes>
                </Router>
                {/* <h1>Hello Class based component {this.c}</h1> */}

            </div>
        )
    }
}
