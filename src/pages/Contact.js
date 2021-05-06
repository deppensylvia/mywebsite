import ContactForm from './form/ContactForm';
import TopButton from '../components/TopButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);

const Contact = ({align}) => {
    return ( 
        <div className={align}>
            <div className="section-header">
                <h2>Contact <FontAwesomeIcon icon={faCoffee} /></h2>
                <p>Ways to reach me</p>
            </div>
            <div className="section-body">
                <p>You can contact me via: </p>
                <a href="https://www.linkedin.com/in/sylvia-deppen/"><FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} /></a>
                <ContactForm />
            </div>
            <TopButton/>
        </div>
     );
}
 
export default Contact;