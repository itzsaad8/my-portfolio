import React from 'react';
import './Education1.css';

const Education = () => {
  return (
    <>
  <div className='d-flex flex-column'>
    <div className='education my-3 justify-content-between d-flex flex-row'>
      <div className='d-flex flex-column new-one'>
        <span className='uni-name'>Islamia College University Peshawer PK</span>
        <span className='uni-degree'>Bachelor of science in Software engg</span>
      </div>
      <div>
        <span className='passing-year'>2020-2024</span>
      </div>
    </div>
    <div className='education my-3 justify-content-between d-flex flex-row'>
      <div className='d-flex flex-column new-one'>
        <span className='uni-name'>The Quaid e azam college swabi kp</span>
        <span className='uni-degree'>Fsc pre engineering</span>
      </div>
      <div>
        <span className='passing-year'>2018-2020</span>
      </div>
    </div>
    <div className='education my-3 justify-content-between d-flex flex-row'>
      <div className='d-flex flex-column new-one'>
        <span className='uni-name'>Albadar model school shewa adda</span>
        <span className='uni-degree'>ssc in scince</span>
      </div>
      <div>
        <span className='passing-year'>2016-2018</span>
      </div>
    </div>
  </div>
    </>
  )
}

export default Education