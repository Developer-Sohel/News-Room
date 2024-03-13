import { useEffect, useState } from "react";
import HeaderNews from "./HeaderNews";
export default function Header (){
  
  


    const [bdnews, setbdnews]= useState([]);
    
   
    useEffect(()=>{
      fetch('/api.json')
      .then(res =>res.json())
      .then(data => setbdnews(data.news))
    },[])

    return(
       <div className="container mx-auto lg:px-24 py-3 ">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
       
        {
          bdnews.map(news => <HeaderNews key={news.author} newS={news}  ></HeaderNews>)
        }
         
        
        <div>
        </div>
      





         </div>
    
       </div>
    )
}

