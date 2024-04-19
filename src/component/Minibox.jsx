import React from 'react'
import '../css/Minibox.css'
const Minibox = ({data}) => {
  return (
    <div style={{display:'flex',height:'190px',color:'white'}}>
        <div>
            <img style={{height:'180px'}}src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}/>
        </div>
            <div style={{marginLeft:'10px'}}>
                <h4>{data.title}</h4>
                <h4 ><i class="fa-solid fa-star" style={{color:'yellow'}} />{data.vote_average}</h4>
                <h4>{data.vote_count} (UpVote)</h4>
            </div>


    </div>


  )
}

export default Minibox