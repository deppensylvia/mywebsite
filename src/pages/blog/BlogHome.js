import cube from '../../img/SDCube.gif';
import useFetch from '../../useFetch';
import BlogList from './BlogList';

const BlogHome = ({align}) => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className={align}>
            <div className="section-header">
                <h2>SyDev Blog</h2>
                <p>Updates and Articles</p>
            </div>
            <div className="section-body">
                { error && <div>{error}</div>}
                { isPending && <div>Loading...</div>}
                { blogs && <BlogList blogs={blogs} title="All Blog Posts"/>}
            </div>
            <img src={ cube } className="page-end" alt=""/>
        </div>
     );
}
 
export default BlogHome;

