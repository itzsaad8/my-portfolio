// import logo from './logo.svg';
import './components/All.css';
import pict from './Saad.jpg';
import Resume from './components1/Rsume';
import Testinomial from './components1/Testimonial';
import Contact from './components1/Contact';
import './components/All.css'
// // import Education from './components/Education';
// import { useState } from 'react';
// import Education from './components/Education';
// import Programmings from './components/Programmings';
// import Works from './components/Works';
// import Projects from './components/Projects';


function App() {
  
  
  
  return (
    <>
    
    <div className="App">
    <nav  className=" d-flex bg-new px-9 py-2 flex-row">
          <span className="brand-name">SAAD</span>
          <div className="d-flex flex-row py-1 nav-bar offset-4">
            <span className="mx-4 nav-items ">Home</span>
            <span className="mx-4 nav-items ">About me</span>
            <span className="mx-4 nav-items ">Resume</span>
            <span className="mx-4 nav-items ">Testonomial</span>
            <span className="mx-4 nav-items ">Contact me</span>
            
          </div>
        </nav>
      <div className="herosection px-10 py-5">
        
        <div className="herosection2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center text-section">
              <span className="im-text">
                Hello I'm <span className="im-name-text">  _Saad Khan!</span>
              </span>
              <span className="text-enthusiastic py-2">
                Frontend Web Dev 
              </span>
              <span className="text-subheading">
                Building wbsites with front end operations
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <button className="btn-hire-me">Hire Me</button>
                <button className="btn-resume">Get Resume</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center outer-img">
              <img className="img-fliud1 img-1" alt="heroimg"  src={pict}/>
            </div>
          </div>
        </div>
      </div>


                 {/* About section  */}


       <div className="aboutme-section about-me my-5">
        <div className="d-flex flex-column">
          <span className="aboutme-text">About Me</span>
          <span className="why-me-text">why to choose me?</span>
          <div className="row justify-content-center shadow-lg my-5">       
                                                    {/* shadow  */}

          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_fifomona.json"  background="transparent"  speed="1"  style={{width: "400px", height: "400px"}}  loop  autoplay></lottie-player>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex  py-3 flex-column">
            <span className="about-me-text">I am s student of sofware engineering in islamia college university peshawer and i am a frontend web developer ,recently i learned Reactjs</span>
            <span className="highlights">
              <span className="text-about-hl">Here are highlights</span>
              <span className="hl-list">
                <ul>
                  <li>Html  about two years experince </li>
                  <li>Css about two years experince</li>
                  <li>Bootstrap about 1 year experince</li>
                  <li>Javascript  only basic concepts</li>
                  <li>Reactjs  learned recently ,know some concepts</li>
                </ul>
              </span>
            </span>
          </div>


          </div>
        </div>
        </div> 



        






    </div>
    <Resume/>
    <Testinomial/>
    <div className='contact-me-part'>
        <div className='relative-bg'></div>
        <div className='contact-inner-part d-flex flex-column '>
            <span className='aboutme-text'>Contact Me</span>
            <span className='why-me-text'>Lets keep in touch</span>
    <Contact/>
    
        </div>
        </div>
    
    </>
  );
}

export default App;
