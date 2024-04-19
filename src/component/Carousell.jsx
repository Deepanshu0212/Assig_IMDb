import React , {useState} from 'react'
import ImageItem from './ImageItem'
import '../css/carousell.css'
const Carousell = ({data,heading}) => {
    // console.log(data);

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 6; 
  const totalImages = 10;

  const nextSlide = () => {
    const newIndex = startIndex + 1;
    setStartIndex(newIndex >= totalImages ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = startIndex - 1;
    setStartIndex(newIndex < 0 ? totalImages - itemsToShow : newIndex);
  };
    return (
    <div className='carousel'>
      <h1>{heading}</h1>
       <div className='movel' onClick={prevSlide}><i style={{fontSize:'20px'}}className="fa-solid fa-chevron-left"></i></div>
       <div className="image-container">
        {data.slice(startIndex, startIndex + itemsToShow).map((data) => (
          <ImageItem  data={data} />
        ))}
      </div>
      <div className='mover' onClick={nextSlide}>
       <i style={{fontSize:'20px'}} className="fa-solid fa-chevron-right" ></i>
       </div>
    </div>

  )
}

export default Carousell