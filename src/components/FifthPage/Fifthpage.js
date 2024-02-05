import React,{useEffect,useState} from 'react'
import './FifthPAge.css'
import SmallCard from './SmallCard'
import { LiaArrowCircleLeftSolid } from "react-icons/lia";
import { LiaArrowCircleRightSolid } from "react-icons/lia";

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
    <div>
    <h6 className='h6-nm'>Explore our foods</h6>
    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />  sed  do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <div className='pop'>
  {apidata && apidata.length > 0 &&
          apidata.map((category, index) => (
            <SmallCard key={index} img={category.strCategoryThumb} />
          ))
        }
 
 {/* <SmallCard  img = {apidata[0].strCategoryThumb}/>
 
<SmallCard  img = {apidata[1].strCategoryThumb} />
<SmallCard  img = {apidata[2].strCategoryThumb}/>
<SmallCard  img = {apidata[3].strCategoryThumb}/>
<SmallCard  img = {apidata[4].strCategoryThumb}/>
<SmallCard  img = {apidata[5].strCategoryThumb}/>  */}
</div>
<LiaArrowCircleLeftSolid   onClick={goToPreviousPage} style={{ fontSize: '50px' }}/> &nbsp; &nbsp; 
      <LiaArrowCircleRightSolid  onClick={goToNextPage} style={{ fontSize: '50px' }}/>

  <button className="buttonsfifthPage" onClick={goToPreviousPage}>Back</button>
  <button className="buttonsfifthPage" onClick={goToNextPage}>Next</button>
  </div>
  );
}
export default FifthPage;
