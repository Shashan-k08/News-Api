import React, {useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spinner from './Spinner'
import "../index.css";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [totalResults, settotalResults] = useState(0);
    const [page, setpage] = useState(1)
   
    const handlenextclick = async () => {
      

        update();
    }

    const fetchMoreData = async () => {
        setpage(page+1)
        // setState({ loading: true });
        const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ce591a2f634140dfb866091f32df451e&page=${page}&pageSize=${props.pageSize}`;

        let data = await fetch(Url);
        console.log(data);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);

    }

    const handleprvclick = async () => {

      
        update();

    }
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const update = async () => {
        props.setProgress(10);
        setloading(true);
        const Url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ce591a2f634140dfb866091f32df451e&page=${page}&pageSize=${props.pageSize}`;

        let data = await fetch(Url);
        props.setProgress(30);
        console.log(data);
        let parsedData = await data.json();
        props.setProgress(70);
        setarticles(parsedData.articles);
        settotalResults(parsedData.articles);
        setloading(false);
        props.setProgress(100);

    }


    useEffect(() => {
        // document.title = ` ${capitalizeFirstLetter(props.category)}-NewsMonkey`;
        
        update();
       
    }, [])


    return (
        <div className='container my-3'>
            <h2 className="text-center"> News Monkey Top {capitalizeFirstLetter(props.category)} Headlines</h2>

            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >



                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}

                        ><NewsItem title={element.title ? element.title.slice(0, 45) : ""} imageurl={element.urlToImage}

                            description={element.description ? element.description.slice(0, 45) : ""} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
            {/* <div className="col-md-4"><NewsItem title="mytitle" description="mydesc" />
                    </div>
                    <div className="col-md-4"><NewsItem title="mytitle" description="mydesc" />
                //     </div> */}
            {/* // <div className="b1 d-flex justify-content-between">
                //     <button type="button " disabled={a <= 1} className="btn btn-dark" onClick={handleprvclick} > &larr; Previous</button>
                //     <button type="button" disabled={a > 4} className="btn btn-dark" onClick={handlenextclick} >Next &rarr;</button>
                // </div> */}


        </div>
    )

}

export default News
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'business',
    progress: 0
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
