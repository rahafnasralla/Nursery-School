import Wave from 'react-wavify'
import wave from "../wave.svg"
import Takeatour from './Takeatour'

export default function Job() {
    return(
        <>
        <div>
        <Wave fill='#a5aadb'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.23,
          points: 3
        }}
         />
        </div>
        <div className="color">
          <Takeatour/>
          <h1 className='bold'>Interested In Working Here? </h1>
          <button className='button1'>Apply Now</button>

        </div>
        <img src={wave} className=""  />
        </>

    )
}