import React from "react";
import style from "./paginated.module.css";

 const Paginated =({currentPage,cardsPerPage,setCurrentPage,totalCards})=>{

 const pageNumbers=[];
 //console.log(Math.ceil(totalCards/cardsPerPage))
 for(let i=1; i<=Math.ceil(totalCards/cardsPerPage);i++){
    pageNumbers.push(i)
 }
 const totalPages = Math.ceil(totalCards / cardsPerPage);

 const handlePrev = () => {
   if (currentPage > 1) {
     setCurrentPage(currentPage - 1);
   }
 };

 const handleNext = () => {
   if (currentPage < totalPages) {
     setCurrentPage(currentPage + 1);
   }
 };
 const onSpecificPage=(n)=>{
    setCurrentPage(n)
 }

    return(
    
    
<div className={style.pagination}  >
  
  
      <ul className={style.list}>
         {pageNumbers.map(nPage=>(
        <li key={nPage}>
            <button className={style.link}  onClick={()=>onSpecificPage(nPage)} >
                 {nPage}

            </button></li>
                         ))}
      </ul>
      <button className={style.butt} onClick={handlePrev}>Previous</button>
      <button className={style.butt} onClick={handleNext}>Next page</button>   
</div>

    )

}

export default Paginated;