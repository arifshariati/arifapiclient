import React, { Component } from 'react';
import axios from 'axios';
import TopNews from './topNews';
import NewsColumns from './newsColumns';
import MidBanner from './midBanner';
import colors from '../resource/colors';

class Business extends Component{
    state ={
        TopNews:[],
        Ariananews:[],
        Tolonews:[]
      }
      componentDidMount(){
    
        this.getData();
      }
    
      async getData(){
    
        const res_ariananews = await axios.get("http://localhost:2020/news/ariananews");
        const res_tolonews = await axios.get("http://localhost:2020/news/tolonews");
        const news_count_ariananews = res_ariananews.data.length;
        const news_count_tolonews = res_tolonews.data.length;

        this.setState({
          TopNews:res_ariananews.data.slice(news_count_ariananews-6),
          Ariananews:res_ariananews.data.slice(news_count_ariananews-4),
          Tolonews:res_tolonews.data.slice(news_count_tolonews-4)
        })
      }

    render(){
        const topnews = this.state.TopNews;
        const ariananews = this.state.Ariananews;
        const tolonews = this.state.Tolonews;
        return(
            <div>
                <TopNews topnews={topnews} />
                <MidBanner color={colors.green} />
                <NewsColumns ariananews={ariananews} tolonews={tolonews} />
                
            </div>
        );
    }
}
export default Business;