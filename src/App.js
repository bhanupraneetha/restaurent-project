// import React,{ useState }  from 'react'
// import FirstPage from './components/FirstPage/FirstPage';
// import SecondPage from './components/SecondPage/SecondPage';
// import ThirdPage from './components/BigCard/ThirdPage/ThirdPage';
// // import FourthPage from './components/FourthPage/FourthPage'
//  import FourthPage from './components/FourthPage/FourthPage';
// import FifthPage from './components/FifthPage/FifthPage';
// import SixthPage from './components/SixthPage/SixthPage';
// import SeventhPage from './components/SeventhPage/SeventhPage'


// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => prevPage < 6 ? prevPage + 1 : prevPage);
//   };

//   const goToPreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage > 1 ? prevPage - 1 : prevPage);
//   };

//   return (
//     <div>
//       <>
//       {currentPage === 1 && <FirstPage goToNextPage={goToNextPage}  />}
//       {currentPage === 2 && <SecondPage goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />}
//       {currentPage === 3 && <ThirdPage goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />}
//       {currentPage === 4 && <FourthPage goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage}/>}
//       {currentPage === 5 && <FifthPage goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />}
//       {currentPage === 6 && <SixthPage goToPreviousPage={goToPreviousPage} goToNextPage={goToNextPage} />} 
//       {currentPage === 7 && <SeventhPage goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage}/>}
      
//       </>
//     </div>
//   );
// };

// export default App



import React from 'react'
import FirstPage from './components/FirstPage/FirstPage'
function App() {
  return (
    <div>
      <FirstPage/ >
    </div>
  )
}

export default App
