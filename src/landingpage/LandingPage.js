import {motion} from 'framer-motion'
export default function LandingPage() {
    return(
        <div className="">
        <div className="">
          <section>
            <div className="container"> 
                <div className="row">
                    <div className="col-md-4 margin">
                            <motion.h1 className="b" initial={{x:-100,y:-50}} animate={{x:0,y:0}}
                            transition={{type: "spring" ,duration: "2", delay:"0"}} >
                            Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit,</motion.h1>
                            <pre>
                                
                            </pre>
                            <p className="i">
                            Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit,
                              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className='register'>
                            <button className="contact" >Register your kid</button> 
                            </div>
                    </div> 
                    <div className="col-md-4">
                    <div className="glass overflow-hidden">
                    <div className="wrapper">
                    <img src="./images/kids.jpg" alt="" className="image-fluid"/>
                    <img src="./images/kids1.jpg" alt="" className="image-fluid"/>
                    <img src="./images/kids2.jpg" alt="" className="image-fluid"/>
                    <img src="./images/kids3.jpg" alt="" className="image-fluid"/>
                    <img src="./images/kids4.jpg" alt="" className="image-fluid"/>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
          </section>
        </div>
        
        </div>
    )
}