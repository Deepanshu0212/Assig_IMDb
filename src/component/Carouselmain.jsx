import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../css/Carouselmain.css'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Carouselmain = ({data}) => {
  return (
    <div style={{margin:'50px'}}>
        <Carousel style={{width:'60vw',height:'82vh'}}>
        {data.slice(11,16).map((data) => (
          <Carousel.Item style={{Color:'white'}}>
          {/* <ExampleCarouselImage text="First slide" />
           <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          <img 
            style={{width:'58vw',height:'63vh',imageResolution:'300dpi'}}
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          />
          <div style={{display:'flex',justifyContent:'space-evenly',color:'white',marginTop:'10px'}}>
            <h1 >{data.title}</h1> &nbsp;&nbsp;
            <h2 ><i class="fa-solid fa-star" style={{color:'yellow'}} />{data.vote_average}</h2>
          </div>
          {/* <Carousel.Caption style={{backgroundColor:'none'}}>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        ))}
        </Carousel>
    </div>
  )
}

export default Carouselmain