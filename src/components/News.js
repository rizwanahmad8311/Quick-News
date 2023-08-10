import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor(){
        super();
        this.state = {
            articles:[],
            loading:false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f50aaa87e3084b3d91d272e73d18f0eb";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles:parsedData.articles})

    }
    render() {
        return (
            <div className="container my-3">
                <h2>Quick Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://gumlet.assettype.com/bloombergquint%2F2023-08%2Fde06bc0a-96e5-4284-ba78-0baf52ac4c55%2FHappiest_Minds_website.jpg?w=1200&auto=format%2Ccompress&ogImage=true"} newsUrl={element.url} />
                    </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News