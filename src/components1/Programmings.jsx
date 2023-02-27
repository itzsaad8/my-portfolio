import React from 'react'
import './Programming1.css'

const Programmings = () => {

  const value=[
    {
      text:"Html",
      percentage:80
    },
    {
      text:"Css",
      percentage:80
    } ,
    {
      text:"Bootstrap",
      percentage:80
    },
     {
      text:"javascript",
      percentage:80
    },
    {
      text:"React js",
      percentage:80
    }
  ];
  return (
   <>
     <div>
      <div className='row'>
        {value.map((value,index)=>{

          return(
          <>
          <div className='col-lg-6 col-md-6 col-sm-12 my-2'>
            <span className='language'>{value.text}</span>
            <div className='progress-some'>
              <div className='progress-new'
               style={{width:`${value.percentage}%`}}>

               </div> 
            </div>
          </div>
          </>)
        })}
      </div>
     </div>
   
   </>
  )
}

export default Programmings