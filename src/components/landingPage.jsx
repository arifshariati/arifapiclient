import React, { Component } from 'react';
import axios from 'axios';
import TopNews from './topNews';
import NewsColumns from './newsColumns';
import MidBanner from './midBanner';
import colors from '../resource/colors';
import APILINK from '../resource/apilink';

console.log(APILINK);

class LandingPage extends Component{
    state ={
        TopNews:[],
        Ariananews:[],
        Tolonews:[],
        Pajhwoknews:[],
        Khaama:[],
        Voadari:[]
      }
      componentDidMount(){
    
        this.getData();
      }
    
      async getData(){
        
        const link = APILINK.link;
        const res_ariananews = await axios.get(`${link}news/ariananews`);
        const res_tolonews = await axios.get(`${link}news/tolonews`);
        const res_pajhwoknews = await axios.get(`${link}news/pajhwoknews`);
        const res_khaama = await axios.get(`${link}news/khaamanews`);
        const res_voadari = await axios.get(`${link}news/voadari`);

        const news_count_ariananews = res_ariananews.data.length;
        const news_count_tolonews = res_tolonews.data.length;
        const news_count_pajhwoknews = res_pajhwoknews.data.length;
        const news_count_khaama = res_khaama.data.length;
        const news_count_voadari = res_voadari.data.length;

        this.setState({
          TopNews:res_ariananews.data.slice(news_count_ariananews-6),
          Ariananews: news_count_ariananews > 4 ? res_ariananews.data.slice(news_count_ariananews-4) : res_ariananews.data,
          Pajhwoknews: news_count_pajhwoknews > 4 ? res_pajhwoknews.data.slice(news_count_pajhwoknews-4) : res_pajhwoknews.data,
          Khaama: news_count_khaama > 4 ? res_khaama.data.slice(news_count_khaama-4) : res_khaama.data,
          Voadari: news_count_voadari > 4 ? res_voadari.data.slice(news_count_voadari-4) : res_voadari.data,
        })
      }

    render(){
        const topnews = this.state.TopNews;
        const ariananews = this.state.Ariananews;
        const tolonews = this.state.Tolonews;
        const pajhwoknews = this.state.Pajhwoknews;
        const khaama = this.state.Khaama;
        const voadari = this.state.Voadari;

        return(
             <div>
                <TopNews topnews={topnews} />
                <MidBanner color={colors.green} />
                <NewsColumns 
                  ariananews={ariananews} 
                  tolonews={tolonews} 
                  pajhwoknews={pajhwoknews} 
                  khaama={khaama}
                  voadari={voadari}
                />
                
            </div>
        );
    }
}
export default LandingPage;