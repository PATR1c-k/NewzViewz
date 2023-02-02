import React, { Component } from 'react'
import Navbar from './Navbar'
import News from './News'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
    pagesize = 6;

    state = {
        progress: 0
    };

    setProgress = (progress) => {
        this.setState(
            { progress: progress }
        )
    };

    render() {

        return (
            <div>

                <Router>
                    <Navbar />
                    <LoadingBar
                        color='#f11946'
                        progress={this.state.progress}
                        height={3}
                    />
                    <Routes>
                        <Route exact path="/" element={<News setProgress={this.setProgress} key="home" pagesize={this.pagesize} country="in" category="general" />} />
                        <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" pagesize={this.pagesize} country="in" category="business" />} />
                        <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" pagesize={this.pagesize} country="in" category="entertainment" />} />
                        <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" pagesize={this.pagesize} country="in" category="health" />} />
                        <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" pagesize={this.pagesize} country="in" category="science" />} />
                        <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" pagesize={this.pagesize} country="in" category="sports" />} />
                        <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" pagesize={this.pagesize} country="in" category="technology" />} />
                    </Routes>
                </Router>
                {/* <h1>Hello Class based component {this.c}</h1> */}
            </div>
        )
    }
}
