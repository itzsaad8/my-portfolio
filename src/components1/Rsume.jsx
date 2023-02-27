import React from 'react'
import { useState } from 'react'
import Education from './Education'
import Works from './Works'
import Programmings from './Programmings'
import Projects from './Projects'
// import Abc from './Abc'
// import W from './W'

// import Education from './components/Education';


const Rsume = () => {
  const [education, seteducation]=useState(true);
  const [works, setworks]=useState(false);
  const [programmings, setprogrammings]=useState(false);
  const [projects, setprojects]=useState(false);

  function setAllFalse(){
    seteducation(false)
    setworks(false)
    setprogrammings(false)
    setprojects(false)
  }
  function changeState(function1,state1){
    setAllFalse()
    function1(state1)
  }
  return (
    <div className="resume-section d-flex flex-column ">
          <span className="aboutme-text">Resume</span>
          <span className="why-me-text">Personal Bio Detail</span>
          
         <div className="resume-section1 row bg-white"     style={{width:"70%",  marginInline:"auto"}}>
            <div className='col-lg-4 col-md4 resume-left-section d-flex px-0 shadow-lg flex-row' >
                <div className='d-flex flex-column bg-new text-white '>
                    <span className='icons-span'>
                    <i class="fa-sharp fa-solid fa-user-graduate"></i>
                    </span>
                    <span className='icons-span'>
                    <i class="fa-solid fa-briefcase"></i>
                    </span>
                    <span className='icons-span'>
                    <i class="fa-sharp fa-solid fa-user-graduate"></i>
                    </span>
                    <span className='icons-span'>
                    <i class="fa-sharp fa-solid fa-user-graduate"></i>
                    </span>
                </div>
                <div className='d-flex flex-column bg-white'>
                    <span className={education === false?'options-text':'selected options-text'} onClick={()=>{
                      changeState(seteducation,true)
                    }}>Education</span>
                    <span className={works === false?'options-text':'selected options-text'}onClick={()=>{ 
                      changeState(setworks,true)
                    }}>Work</span>
                    <span className={programmings === false?'options-text':'selected options-text'}onClick={()=>{
                      changeState(setprogrammings,true)
                    }}>Programming</span>
                    <span className={projects === false?'options-text':'selected options-text'}onClick={()=>{
                      changeState(setprojects,true)
                    }}>Projects</span>
                </div>
            </div>
            
            <div className='col-lg-8 col-md8 resume-right-section'>
              {education ? <Education/>:null}
              {works ?<Works/>:null}
              {programmings  ===  true && <Programmings/>}
              {projects  ===  true && <Projects/>}
            </div>
         </div>
    </div>
  )
}

export default Rsume