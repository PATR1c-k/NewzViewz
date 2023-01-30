import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "TK Arun",
            "title": "Budget 2023: Build new cities, it is what our future demands of the present",
            "description": "By 2051, India may have an additional 335 million urban population. Several new cities will be needed to settle them",
            "url": "https://www.moneycontrol.com/news/business/economy/budget-2023-build-new-cities-it-is-what-our-future-demands-of-the-present-9952651.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/budget-real-estate4-770x433.jpg",
            "publishedAt": "2023-01-28T03:52:28Z",
            "content": "India needs more than a pat on the back from fiscal-deficit-focused rating agencies and analysts, in order to regain economic vigour in a slowing world. A whole lot more. India needs a new New Deal, … [+5355 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Iasbaba.com"
            },
            "author": "IASbaba",
            "title": "Miniature votive stupas at Nalanda",
            "description": "Context: Archeological Survey of India (ASI) has recently discovered two 1200-year-old miniature votive stupas during landscaping activities near Sarai Tila mound on the premises of ‘Nalanda Mahavihara’, a world heritage site in Nalanda district. About Miniat…",
            "url": "https://iasbaba.com/2023/01/miniature-votive-stupas-at-nalanda/",
            "urlToImage": "https://iasbaba.com/wp-content/uploads/2023/01/nm.png",
            "publishedAt": "2023-01-17T13:25:06Z",
            "content": "Context: Archeological Survey of India (ASI) has recently discovered two 1200-year-old miniature votive stupas during landscaping activities near Sarai Tila mound on the premises of Nalanda Mahavihar… [+2202 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thefreedictionary.com"
            },
            "author": null,
            "title": "The British Museum Opens (1759)",
            "description": "When the British Museum opened to the public in 1759, its exhibits were based largely on personal collections, including Sir Hans Sloane's Cabinet of Curiosities, Robert Harley's library, and Sir Robert Cotton's antiquities. Today, the museum is home to more …",
            "url": "https://encyclopedia.thefreedictionary.com/British+Museum",
            "urlToImage": "http://img.tfd.com/TFDlogo1200x1200.png",
            "publishedAt": "2023-01-15T05:00:00Z",
            "content": "The British Museum is a museum in London dedicated to human history and culture. Its permanent collection, numbering some 8 million works,[3] is among the largest and most comprehensive in existence[… [+66041 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Andhra To Investigate Stampede At Chandrababu Naidu Event",
            "description": "The Andhra Pradesh government late on Saturday night constituted a one-man Commission of Inquiry to probe into the circumstances that led to two incidents of stampede in which 11 persons were killed in recent days.",
            "url": "https://www.ndtv.com/india-news/andhra-pradesh-appoints-inquiry-commission-to-investigate-recent-stampedes-3672903",
            "urlToImage": "https://c.ndtvimg.com/2023-01/u0ovta3o_chandrababu-naidu-stampede_650x400_01_January_23.jpg",
            "publishedAt": "2023-01-07T17:30:39Z",
            "content": "The recent two stampedes in the state killed a total of 11 people. (File) Amaravati: The Andhra Pradesh government late on Saturday night constituted a one-man Commission of Inquiry to probe into th… [+1451 chars]"
        },
    ];


    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 >NewzViewz - Top Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return (<div className="col-md-auto  my-2" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} newsURL={element.url} imageURL={element.urlToImage} />
                        </div>);
                    })}
                </div>
            </div >

        )
    }
}
