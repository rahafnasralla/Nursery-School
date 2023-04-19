import React, {useState,useEffect} from 'react'
import Wave from 'react-wavify'
import wave from "../../wave.svg"
import Fade from  'react-reveal/Fade'
import './services.scss'
import service from './service.js'

export default function Services() {
  const [service_] = useState(service);


    return(
        <div className="">
        <Wave fill='#a5aadb'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.23,
          points: 3
        }}
         />
        <div className="color">
        <div className='bold'>
        Our services 
        </div>
        {/* the app service when you press or hover over it you get a down the app icon (play store icon) */}
        <Fade top cascade>
        <div className='d-flex services'>
        {service_?.map((item, idx) => {
                    return (
          <div key={idx} className='service-1'>
          <div className='shapes'>
          <div className="shape-1 right"></div>
          <div className="shape-2 right"></div>
          <div className="shape-3 right"></div>
          </div>
          <div className="img"><img className='image' src={item.image} alt="" /></div>
          <div className='description'>
          <h2>{item.name}</h2>
          <p>{item.desc}</p>
          </div>
          <div className='shapes'>
            <div className="shape-4 right"></div>
            <div className="shape-5 right"></div>
            <div className="shape-6 right"></div>
          </div>
        </div>
                    )
                })}
        </div>
        </Fade>
        </div>
        <img src={wave} className=""  />
        </div>
    )
}