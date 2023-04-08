import './notfound.scss'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate()

    const move =() => {
        navigate('/')
    }

    return (
        <div className='not'>
        <section class="page_404">
       <div class="container">
           <div class="row">
               <div class="col-sm-12">
                   <div class="text-center">
                       <div class="four_zero_four_bg">
                           <h1 class="text-center">404</h1>
                       </div>
                       <div class="content_box_404">
                           <h3 class="h2">Looks Like You're Lost</h3>
                           <p>The page you are looking for not available</p>
                           <button type='submit' onClick={move}>Go to Home</button>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </section>
        </div>
        )
}
