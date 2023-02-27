import React from 'react';
import './Testo.css';

const Testinomial = () => {
 
    
    const value=[
        {
            
            name:"how ?",
            detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, pariatur ducimus illo, laboriosam aut et hic dolorum voluptates"
        },
         {
        
            name:"where ?",
            detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, pariatur ducimus illo, laboriosam aut et hic dolorum voluptates"
        },
         {
            
            name:"when ?",
            detail:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, pariatur ducimus illo, laboriosam aut et hic dolorum voluptates "
        }
        
    ];
    
    return(
        <>
            <div className='test-text py-5'>Testimonial</div>
            {/* <div className='d-flex flex-row py-5'> */}
        <div className='d-flex flex-row align-items-center justify-content-center py-5 '>
              
                {value.map((value,index)=>{
                    return(
                        <>
                        <div className=' nameee col-lg-3 col-md-6 col-sm-8 shadow-lg '>
            <div className='name1 justify-content-center align-items-center '>{value.name}</div>
            <div className='d-flex flex-column judtify-content-center'>
            <span className='detail'>{value.detail}</span>
            </div>
            


           
          </div>
          
                        </>
                        
                    )
                })}

            </div>
        {/* </div> */}
        
    
    
    </>)
  
}

export default Testinomial