import React, { Component } from 'react';
import axios from 'axios';
import IndMidBanner from './IndmidBanner';
import IndnewsColumns from './indnewsColumns';
import colors from '../resource/colors';
import Texts from '../resource/texts';
import APILINK from '../resource/apilink';

class LandingPage extends Component{
    state ={
        heading:Texts.heading.Khaama,
        Khaama:[],
      }
      componentDidMount(){
    
        this.getData();
      }
    
      async getData(){
        
        const link = APILINK.link;
        const res_khaama = await axios.get(`${link}news/khaamanews`);

        const news_count_khaama = res_khaama.data.length;

        this.setState({
          Khaama: news_count_khaama > 20 ? res_khaama.data.slice(news_count_khaama-20) : res_khaama.data,
        })
      }

    render(){
        const khaama = this.state.Khaama;

        return(
             <div>
                <IndMidBanner color={colors.green} />
                <IndnewsColumns 
                  data={khaama}
                />
                
            </div>
        );
    }
}
export default LandingPage;