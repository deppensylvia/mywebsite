import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const PopupModal = () => {
    return (  
    <div className="popup-wrapper">
        <div className="popup">
            <div className="popup-close">x</div>
            <div className="content">
                    <h2>Hi!</h2>
                    <p>Thanks for thinking of subscribing! If you want to chat, feel free to contact me.</p>
                    <a href="https://www.linkedin.com/in/sylvia-deppen/"><FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} /></a>
            </div>
        </div>
    </div>
    );
}
 
export default PopupModal;