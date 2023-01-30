import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=mumbai&from=2022-12-30&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=12`;
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
    };


    handlePrevClick = async () => {

        let url = `https://newsapi.org/v2/everything?q=mumbai&from=2022-12-30&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page - 1}&pagesize=12`;
        let data = await fetch(url)
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles
            }
        )
    }


    handleNextClick = async () => {

        console.log("Next cliked");
        let url = `https://newsapi.org/v2/everything?q=mumbai&from=2022-12-30&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page + 1}&pagesize=12`;
        let data = await fetch(url)
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState(
            {
                page: this.state.page + 1,
                articles: parsedData.articles
            }
        )
    }

    render() {
        return (
            <div className='container my-3'>
                <h2 >NewzViewz - Top Headlines</h2>
                <div className="row my-3">
                    {this.state.articles.map((element) => {
                        return (<div className="col-md-auto  my-2" key={element.url}>
                            <NewsItem title={element.title} description={element.description} newsURL={element.url} imageURL={element.urlToImage} />
                        </div>);
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevCLick}>&laquo;  Previous</button>
                    <button className='btn btn-dark' onClick={this.handleNextClick}>Next  &raquo;</button>
                </div>
            </div >

        )
    }
}

