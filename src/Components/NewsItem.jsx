import React, { Component } from 'react'



export default class NewsItem extends Component {
    render() {
        const { title, description, imageURL, newsURL, author, date, source } = this.props;



        return (
            <div className='my-2'>
                <div className="card h-100">
                    <span className="position-absolute top-0 start-50 translate-middle badge bg-danger" style={{ zIndex: "3" }}>
                        {source.name}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <img src={imageURL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} </h5>
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

{/* <button type="button" className="btn btn-primary position-relative">
    Inbox

</button> */}