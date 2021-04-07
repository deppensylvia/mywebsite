import { useHistory, useParams } from "react-router";
import useFetch from '../../useFetch';

const BlogDetails = ({align}) => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/blogs')
        })
    };

    return ( 
        <div className={align}>
            <div className="blog-details">
                { isPending && <div>Loading...</div> }
                { error && <div>{ error }</div> }
                { blog && (
                    <article>
                        <h3>{ blog.title }</h3>
                        <p>Written by { blog.author }</p>
                        <div>{ blog.body }</div>
                        <button onClick={ handleClick}>delete</button>
                    </article>
                )}
            </div>
        </div>
     );
}
 
export default BlogDetails;