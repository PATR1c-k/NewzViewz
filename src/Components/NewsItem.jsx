import React, { Component } from 'react'



export default class NewsItem extends Component {
    render() {
        const { title, description, imageURL, newsURL } = this.props;

        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )


    }
}

// API KEY - 29d910e6039445aab5463ebbe81c18eb
// GET - "https://newsapi.org/v2/everything?q=tesla&from=2022-12-30&sortBy=publishedAt&apiKey=29d910e6039445aab5463ebbe81c18eb"