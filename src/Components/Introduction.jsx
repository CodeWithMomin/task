import React from 'react'
import './Introduction.css'
const Introduction = () => {
  return (
    <>
 <header>
    <div className="logo"><img src="https://cied.iust.ac.in/_next/static/media/logo.2c715f28.svg" alt="" width="90%" height="80%"
     /></div>
    <div  className='links'>
        <a href="#">Home</a>
        <button className='regbtn'>Register</button>
    </div>
 </header>
 <div className="main">
    <div className="iust"><img src="https://cied.iust.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiust-logo-wide.67b7683d.png&w=384&q=75" alt="" width="263px"
    height="50px" /></div>
    <div className="headings">
        <p>Presents</p>
    </div>
    <div className='AfkaarMain'>
    <div className="imgdiv">
        <img src="https://cied.iust.ac.in/_next/static/media/logo.2c715f28.svg" alt="" width="750px" height="200px" />
    </div>
    </div>
    <div className="fourlogos">
        <img src="https://cied.iust.ac.in/_next/static/media/g20-logo.a30ba5dd.svg" alt="" width="91px" height="50px"/>
        <img src="https://cied.iust.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyukti-logo.d208697a.png&w=96&q=75" alt="" width="93px" height="50px" />
        <img src="https://cied.iust.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faicte-logo.faedbd1d.png&w=64&q=75" alt="" width="50px" height="50px" />
        <img src="https://cied.iust.ac.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fiic-logo.2f2c537f.png&w=128&q=75" alt="" width="116px" height="50px" />
    </div>
    <div className="qoute">
        <p>Nothing can stop an idea whose time has come
        </p>
       
    </div>
    <div className="qoute">
    <p>- Victor Hugo</p>


       
    </div>
 </div>


    </>
  )
}

export default Introduction