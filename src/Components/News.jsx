import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import { PropTypes } from "prop-types";
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1);
    const [totalResults, setTotalResult] = useState(0);



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const componentDidMount = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2023-01-25&sortBy=publishedAt&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${props.pagesize}&page=${Page}`;
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        // console.log(parsedData);
        setArticles(parsedData.articles);
        setTotalResult(parsedData.totalResults);
        setLoading(false);

        props.setProgress(100);

    };

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&from=2023-01-25&sortBy=publishedAt&category=${props.category}&apiKey=${process.env.REACT_APP_API_KEY}&pagesize=${props.pagesize}&page=${Page + 1}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResult(parsedData.totalResults);
        setLoading(false);
        setPage(Page + 1);
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} | NewzViewz`;
        componentDidMount();
    }, [])


    return (
        <div className='container my-3'>
            {/* Adding loading spinner */}
            <h2 className='text-center' style={{ marginTop: "90px" }}>NewzViewz - Top  <strong>{capitalizeFirstLetter(props.category)}</strong> headlines</h2>

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row my-3">
                        {articles?.map((element) => {
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


News.defaultProps = {
    country: "in",
    pagesize: 8,
    category: "general",
    totalResults: 0
}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News;