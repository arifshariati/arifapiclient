import React, { Component } from 'react';
import axios from 'axios';
import IndMidBanner from './IndmidBanner';
import IndnewsColumns from './indnewsColumns';
import colors from '../resource/colors';
import Texts from '../resource/texts';
import APILINK from '../resource/apilink';

class LandingPage extends Component{
    state ={
        heading:Texts.heading.Ariananews,
        Ariananews:[],
      }
      componentDidMount(){
    
        this.getData();
      }
    
      async getData(){
        const link = APILINK.link;
        const res_ariananews = await axios.get(`${link}news/ariananews`);
        //const res_ariananews = await axios.get("https://arifapi.herokuapp.com/news/ariananews");

        const news_count_ariananews = res_ariananews.data.length;

        this.setState({
          Ariananews: news_count_ariananews > 20 ? res_ariananews.data.slice(news_count_ariananews-20) : res_ariananews.data,
        })
      }

    render(){
        const ariananews = this.state.Ariananews;

        return(
             <div>
                <IndMidBanner color={colors.green} />
                <IndnewsColumns 
                  data={ariananews}
                />
                
            </div>
        );
    }
}
export default LandingPage;