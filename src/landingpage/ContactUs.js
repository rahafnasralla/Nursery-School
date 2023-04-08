import { useContext } from "react";
import { GlobalContext } from "../Context";
export default function ContactUs() {

  const context = useContext(GlobalContext);
  function onButtonClicked() {
      context.showModal();
  }

  return (
   <div className='contact-sect'>
   <div className='more'>
    <h1 className='info'>More Information!</h1>
    <h4 className='note'>Send us a note to learn more about a site tour, enrollment information and/or employment opportunities.</h4>
    <button onClick={onButtonClicked} className='button btn1'>Contact us</button>
   </div>
   </div>
  )
}
