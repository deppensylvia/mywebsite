import cube from '../img/SDCube.gif';
import ContactForm from './form/ContactForm';

const Contact = ({align}) => {
    return ( 
        <div className={align}>
            <div className="section-header">
                <h2>Contact</h2>
                <p>Ways to reach me</p>
            </div>
            <div className="section-body">
                <ContactForm />
            </div>
            <img src={ cube } className="page-end" alt=""/>
        </div>
     );
}
 
export default Contact;