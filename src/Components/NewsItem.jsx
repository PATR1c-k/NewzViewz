import React, { Component } from 'react'



export default class NewsItem extends Component {
    render() {
        const { title, description, imageURL, newsURL, author, date } = this.props;



        return (
            <div className='my-2'>
                <div className="card h-100">
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">{date}</small>
                        <br />
                        <strong><small className="text-muted">by {!author ? "Unknown" : author}</small></strong>
                    </div>
                </div>
            </div>
        )


    }
}

