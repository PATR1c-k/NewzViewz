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

                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<News pagesize="8" country="in" category="general" />} />
                        <Route exact path="/business" element={<News pagesize="8" country="in" category="business" />} />
                        <Route exact path="/entertainment" element={<News pagesize="8" country="in" category="entertainment" />} />
                        <Route exact path="/health" element={<News pagesize="8" country="in" category="health" />} />
                        <Route exact path="/science" element={<News pagesize="8" country="in" category="science" />} />
                        <Route exact path="/sports" element={<News pagesize="8" country="in" category="sports" />} />
                        <Route exact path="/technology" element={<News pagesize="8" country="in" category="technology" />} />
                    </Routes>
                </Router>
                {/* <h1>Hello Class based component {this.c}</h1> */}

            </div>
        )
    }
}
