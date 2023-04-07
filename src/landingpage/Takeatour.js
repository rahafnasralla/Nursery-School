import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import img from './img' 
export default function Takeatour() {
    const [width, setWidth] = useState(0)
    const carousel = useRef()
    const [images] = useState(img) 

    useEffect(()=> {
        setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
    },[])
    return(
        <div>
        <div className='bold'><h1>Explore our facility</h1></div>
        <motion.div ref={carousel} className='carousel' whileTap={{cursor : "grabbing"}}>
        <motion.div drag='x' dragConstraints={{right :0, left : -width}} className='inner-carousel'>
        {
            images.map((image) => {
                return (
                    <motion.div className='item'>
                    <img src={image} alt="" />
                    </motion.div>
                )

            })
        }
            
        </motion.div>
        </motion.div>

        </div>
    )
}