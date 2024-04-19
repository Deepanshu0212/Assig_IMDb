import React,{useEffect , useState} from 'react'
import Carousell from './Carousell'
import Carouselmain from './Carouselmain'
import Minibox from './Minibox'

const Movie = () => {
   
   const[data,setdata] = useState([])
   const [err,seterr] = useState(null)
   const [isload ,setload] = useState(null);

  // const getMovie = ()=>{
  //   fetch("https://api.themoviedb.org/3/discover/movie?api_key=511f2b8eb7f1f691a4f071ea5d7fb208")
  //   .then(res=>res.json())
  //   .then(json => console.log(json.results))
  // }


  const getMovie = async ()=>{
      try{
        const response = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=511f2b8eb7f1f691a4f071ea5d7fb208");
        const resdata = await response.json();
        setdata(resdata.results);
      }
      catch(err){
        seterr(err);
      }
      finally{
        setload(false);
      }
  }

  useEffect(()=>{
    getMovie()
  },[])

  return (
    <div>
       <div style={{display:'flex'}}>
     <Carouselmain data={data}/>
      <div style={{marginTop:'50px'}}>
        <h2 style={{color:'white'}}>Up next</h2>
      {data.slice(17,20).map((data) => (
          <Minibox  data={data} />
        ))}
      </div>
      </div>


     <Carousell data={data} heading="Popular Show"/>
     <Carousell data={data} heading="Favourite Show"/>
    </div>
  )
}

export default Movie;