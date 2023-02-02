import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import { PropTypes } from "prop-types";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

    articles = [];

    static defaultProps = {
        country: "in",
        pagesize: 8,
        category: "general",
        totalResults: 0
    }

    // static propTypes = {
    //     country: PropTypes.String,
    //     pagesize: PropTypes.Number
    // }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} | NewzViewz`;
    }

    async componentDidMount() {
        this.props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2023-01-25&sortBy=publishedAt&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${this.props.pagesize}&page=${this.state.page}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        this.props.setProgress(100);

    };

    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&from=2023-01-25&sortBy=publishedAt&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${this.props.pagesize}&page=${this.state.page + 1}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
            page: this.state.page + 1
        });
    };

    render() {
        return (
            <div className='container my-3'>
                {/* Adding loading spinner */}
                <h2 className='text-center'>NewzViewz - Top  <strong>{this.capitalizeFirstLetter(this.props.category)}</strong> headlines</h2>

                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row my-3">
                            {this.state.articles?.map((element) => {
                                const d = new Date(element.publishedAt);
                                return (
                                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 my-2" key={element.url}>
                                        <NewsItem title={element.title} description={element.description} newsURL={element.url} imageURL={element.urlToImage} date={d.toUTCString()} author={element.author} source={element.source} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </div >

        )
    }
}