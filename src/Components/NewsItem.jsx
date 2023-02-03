import React from 'react'

function NewsItem(props) {
    let { title, description, imageURL, newsURL, author, date, source } = props;
    return (
        <div className='my-2'>
            <div className="card h-100">
                <span className="position-absolute top-0 start-50 translate-middle badge bg-danger" style={{ zIndex: "3" }}>
                    {source.name}
                    <span className="visually-hidden">unread messages</span>
                </span>
                <img src={!imageURL ? "https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5rbm93bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" : imageURL} className="card-img-top" alt="..." />
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

export default NewsItem;



