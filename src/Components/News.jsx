import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import { PropTypes } from "prop-types";
import Spinner from './Spinner';

export default class News extends Component {

    static defaultProps = {
        country: "in",
        pagesize: 8,
        category: "general"
    }

    // static propTypes = {
    //     country: PropTypes.String,
    //     pagesize: PropTypes.Number
    // }

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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2023-01-25&sortBy=publishedAt&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
    };


    handlePrevClick = async () => {

        console.log("Previous clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2023-01-25&sortBy=publishedAt&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
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
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2023-01-25&sortBy=publishedAt&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
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
                        const d = new Date(element.publishedAt);
                        return (
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description} newsURL={element.url} imageURL={element.urlToImage} date={d.toUTCString()} author={element.author} />
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
