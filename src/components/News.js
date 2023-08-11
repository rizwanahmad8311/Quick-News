import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
    static defaultProps = {
        country: ''
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f50aaa87e3084b3d91d272e73d18f0eb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
    }
    async componentDidMount() {
        this.updateNews()

    }
    Handleprevious = async () => {
        this.setState({ page: this.state.page - 1 })
        this.updateNews()
    }
    Handlenext = async () => {
        this.setState({ page: this.state.page + 1 })
        this.updateNews()
    }
    render() {
        return (
            <div className="container my-5">
                <h2 className="text-center" style={{ marginTop: "80px", marginBottom: "20px" }} >Quick Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://gumlet.assettype.com/bloombergquint%2F2023-08%2Fde06bc0a-96e5-4284-ba78-0baf52ac4c55%2FHappiest_Minds_website.jpg?w=1200&auto=format%2Ccompress&ogImage=true"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} onClick={this.Handleprevious} className="btn btn-sm btn-dark mt-2">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)} onClick={this.Handlenext} className="btn btn-sm btn-dark mt-2">Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News