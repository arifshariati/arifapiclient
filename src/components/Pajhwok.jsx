import React, { Component } from 'react';
import axios from 'axios';
import IndMidBanner from './IndmidBanner';
import IndnewsColumns from './indnewsColumns';
import colors from '../resource/colors';
import Texts from '../resource/texts';
import APILINK from '../resource/apilink';

class LandingPage extends Component{
    state ={
        heading:Texts.heading.Pajhwok,
        Pajhwok:[],
      }
      componentDidMount(){
    
        this.getData();
      }
    
      async getData(){
    
        const link = APILINK.link;
        const res_pajhwok = await axios.get(`${link}news/pajhwoknews`);

        const news_count_pajhwok = res_pajhwok.data.length;

        this.setState({
          Pajhwok: news_count_pajhwok > 20 ? res_pajhwok.data.slice(news_count_pajhwok-20) : res_pajhwok.data,
        })
      }

    render(){
        const pajhwok = this.state.Pajhwok;

        return(
             <div>
                <IndMidBanner color={colors.green} />
                <IndnewsColumns 
                  data={pajhwok}
                />
                
            </div>
        );
    }
}
export default LandingPage;