import React, { Component } from 'react';

import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Slider from '../Components/Slider';
import Categories from '../Components/Categories';
import ShopB from '../Components/ShopBy';
import Paragraph from '../Components/Paragraph';

import Newsletter from '../Components/Newsletter';
import Foo from '../Components/Foo';




class Home extends Component {
    state = {  } 
    render() { 
        return (
         <div>
             <Announcement/>
             <Navbar/>
           <Slider/>
           <ShopB/>
           <Categories/>
        
         
           <Newsletter/>
           <Foo/>
       

         
        
          
          
         </div>



        );
    }
}
 
export default Home;