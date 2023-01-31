import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headilines?q=nashik&from=2023-01-25&sortBy=publishedAt&apiKey=29d910e6039445aab5463ebbe81c18eb&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    };


    handlePrevClick = async () => {

        console.log("Previous clicked");
        let url = `https://newsapi.org/v2/everything?q=nashik&from=2023-01-25&sortBy=publishedAt&apiKey=29d910e6039445aab5463ebbe81c18eb&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url)
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState(
            {
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            }
        )
    }


    handleNextClick = async () => {

        console.log("Next cliked");
        let url = `https://newsapi.org/v2/everything?q=nashik&from=2023-01-25&sortBy=publishedAt&apiKey=29d910e6039445aab5463ebbe81c18eb&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url)
        let parsedData = await data.json();
        // console.log(parsedData);
        this.setState(
            {
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            }
        )
    }

    render() {
        return (
            <div className='container my-3'>
                {/* Adding loading spinner */}
                <h1 className='text-center'>NewzViewz - Top Headlines</h1>

                {this.state.loading && <Spinner />}

                <div className="row my-3">
                    {!this.state.loading && this.state.articles?.map((element) => {
                        return (
                            <div className="col-md-auto  my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description} newsURL={element.url} imageURL={element.urlToImage} />
                            </div>
                        );
                    })}
                </div>
                <div className='d-flex justify-content-between'>
                    <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&laquo;  Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next  &raquo;</button>
                </div>
            </div >

        )
    }
}

// https://newsapi.org/v2/everything?q=nashik&from=2023-01-25&sortBy=publishedAt&apiKey=29d910e6039445aab5463ebbe81c18eb&pagesize=12