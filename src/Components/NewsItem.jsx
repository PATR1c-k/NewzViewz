import React, { Component } from 'react'



export default class NewsItem extends Component {
    render() {
        const { title, description, imageURL, newsURL } = this.props;

        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageURL} className="card-img-top" alt="..." style={{ height: "100%" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )


    }
}

