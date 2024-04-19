import React from 'react'
import '../css/Imageitem.css'
const ImageItem = ({data}) => {
    console.log(data)
  return (
    <div className="box" style={{height:'600px'}}>
        <div>
        <img  style={{height:'350px'}}src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
        </div>
        <div className='content'>
        <h6><i class="fa-solid fa-star" style={{color:'yellow'}} /> {data.vote_average}</h6>
        <div className='heading'><h5>{data.title}</h5></div>
        <button>Watch Options</button><br/>
        <div>
        <div className='trailer'>
        <p style={{fontSize:'15px'}}><i class="fa-solid fa-play"></i> &nbsp;Trailer</p>
        <i class="fa-solid fa-circle-info" style={{fontSize:'20px'}}></i>
        </div>
        </div>
        </div>
    </div>
  )
}

export default ImageItem