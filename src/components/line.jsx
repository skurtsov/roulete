import React, { useEffect, useState } from 'react';

let Line=(props)=>{
   const [q,setQ]=useState(85)
   let kruti=()=>{
      console.log("kk")
      setQ(-500)
      console.log(q)
   }
   
   return(
      <div className='line'>
 <div className='cell'></div>
      <div className='cnt'  style={{ transform: `translateY(${props.translate}px)` }}>
     
 </div>



</div>
   )
}
export default Line;