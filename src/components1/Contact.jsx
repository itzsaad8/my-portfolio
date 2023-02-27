import React from 'react';
import { useState } from 'react';
import './Contact1.css';

const Contact = () => {

    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [message,setmessage]=useState("")


  return (
    <div>
{/* <div className='d-flex flex-row col-lg-12 col-md-4 col-sm-12 mx-auto'> */}
        <div className='contact-me-card row my-5 '>
            <div className='col-lg-6 col-md-5 col-sm-12 left-contact px-2 '>
                <span className='get-in-touch mx-4 '>Get in touch</span>
                <span className='new d-flex px-5'>
                <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_3ktmthuy.json"  background="transparent"  speed="1"  style={{width: "300px", height: "300px"}}  loop  autoplay></lottie-player>
                </span>
            </div>
        
        <div className='col-lg-5 col-md-5 col-sm-12 '>
            <div className='d-flex flex-column card-contact-right'>
                <div className='input-group my-3 d-flex flex-column'>
                    <label>Name</label>
                    <input
                    value={name}
                    onChange={(e)=>{
                    setname(e.target.value)
                    }}
                    
                    type="text" placeholder='Enter yor name' className='input-groups'></input>
                </div>
                <div className='input-group my-3 d-flex flex-column'>
                    <label>Email</label>
                    <input 
                    value={email}
                    onChange={(e)=>{
                    setemail(e.target.value)
                    }} type="text" placeholder='Enter yor email' className='input-groups'></input>
                </div>
                <div className='input-group my-3 d-flex flex-column'>
                    <label >Message</label>    
                    <textarea
                    value={message}
                    onChange={(e)=>{
                    setmessage(e.target.value)
                    }} className='input-groups' placeholder='Enter your message'/>
                    {/* <input type="text" placeholder='Enter yor message' className='input-groups'></input> */}
                </div>
                <div className='input-group my-3 d-flex flex-column'>
                    <button className='btn btn-success input-groups'>Send message</button>
                </div>
            </div>
        </div>
        </div>
        </div>
        // </div>

    
    
  )
}

export default Contact