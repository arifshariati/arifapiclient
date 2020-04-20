import React, { Component } from 'react';
import axios from 'axios';
import IndMidBanner from './IndmidBanner';
import IndnewsColumns from './indnewsColumns';
import colors from '../resource/colors';
import Texts from '../resource/texts';
import APILINK from '../resource/apilink';

class LandingPage extends Component{
    state ={
        heading:Texts.heading.Voadari,
        Voadari:[],
      }
      componentDidMount(){
    
        this.getData();
      }
    
      async getData(){
    
        const link = APILINK.link;
        const res_voadari = await axios.get(`${link}news/voadari`);

        const news_count_voadari = res_voadari.data.length;

        this.setState({
          Voadari: news_count_voadari > 20 ? res_voadari.data.slice(news_count_voadari-20) : res_voadari.data,
        })
      }

    render(){
        const voadari = this.state.Voadari;

        return(
             <div>
                <IndMidBanner color={colors.green} />
                <IndnewsColumns 
                  data={voadari}
                />
                
            </div>
        );
    }
}
export default LandingPage;