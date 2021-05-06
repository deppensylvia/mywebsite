import cube from '../img/SDCube.gif';

const TopButton = () => {
    return (  
        <a href="#top">
            <img src={ cube } className="page-end" alt=""/>
            <h6>Back to top</h6>
        </a>
    );
}
 
export default TopButton;