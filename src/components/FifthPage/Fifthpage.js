import React,{useEffect,useState} from 'react'
import './FifthPAge.css'
import SmallCard from './SmallCard'



function FifthPage({ goToNextPage, goToPreviousPage }) {
  const[apidata,setapidata] =useState([]);
  useEffect(() => {
      fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(res => {
          console.log(res.categories);
          setapidata(res.categories)
        });
  },[]);
  return (
  
      <div className='card-container-fp'>
    <h3 className='h6-nm'>Explore our foods</h3
    >
    <p className='lorem-f5-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sed  do eiusmod tempor incididunt <br /> &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  ut labore et dolore magna aliqua.</p>
  <div className='pop'>
  {apidata && apidata.length > 0 &&
          apidata.map((category, index) => (
            <SmallCard key={index} img={category.strCategoryThumb} />
          ))
        }
 
    
  

</div>

  </div>
  )}
export default FifthPage;
