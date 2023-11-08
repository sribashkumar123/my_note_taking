import mid_img from './page.png';
import './defultpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'; 
export default function Defultfrontpage()

{
    return(
            <>
               <div className="default_page">
                    <div className="center_item">
                        <img src={mid_img} alt='mid img'></img>
                        <h1>Pocket Notes</h1>
                        <p>Send and receive messages without keeping your phone online.
                            Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
                           
                       
                    </div>
                    <div className='end-to-end'>
                         <p><span className='end_icon'><FontAwesomeIcon icon={faLock} /></span><span>end-to-end encrypted</span></p>
                    </div>
                </div>
            </>
    );

}