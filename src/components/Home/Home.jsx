import React from 'react'
import SideNav from '../Header/sideNav/SideNav'
import CarouselItem from './Carousel'
import Products from './Products'
import Slider from './Slider'
function Home() {
    return (
        <div className='home'>
           <div className="home__container">
              <Slider/> 
              <Products/>
              {/* <img src="https://m.media-amazon.com/images/I/61MkiIMUSvL._SX3000_.jpg" alt="" />  */}
               </div> 
            
        </div>
    )
}

export default Home
