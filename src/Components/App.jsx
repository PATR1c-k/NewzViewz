import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

export default class App extends Component {
    pagesize = 6;
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<News key="home" pagesize={this.pagesize} country="in" category="general" />} />
                        <Route exact path="/business" element={<News key="business" pagesize={this.pagesize} country="in" category="business" />} />
                        <Route exact path="/entertainment" element={<News key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />} />
                        <Route exact path="/health" element={<News key="health" pagesize={this.pagesize} country="in" category="health" />} />
                        <Route exact path="/science" element={<News key="science" pagesize={this.pagesize} country="in" category="science" />} />
                        <Route exact path="/sports" element={<News key="sports" pagesize={this.pagesize} country="in" category="sports" />} />
                        <Route exact path="/technology" element={<News key="technology" pagesize={this.pagesize} country="in" category="technology" />} />
                    </Routes>
                </Router>
                {/* <h1>Hello Class based component {this.c}</h1> */}
            </div>
        )
    }
}
