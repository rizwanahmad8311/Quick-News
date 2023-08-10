import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        News Compnent
        <NewsItem/>
      </div>
    )
  }
}

export default News