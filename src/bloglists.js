import { Link } from "react-router-dom";
const Bloglists = ({blogsFM,title}) => {

    return ( 
        <div className="blogs-lists">
            <h2>{title}</h2>
            {
                blogsFM.map((blog)=>(
                  
                    <div className="blog-preview" key={blog.id}>
                       <Link to={`/blogs/${blog.id}`}>
                         <h3>{blog.title}</h3>
                        <p>Written by {blog.author}</p>
                        </Link>
                        {/* <button onClick={()=>handleDelete(blog.id)}>Delete blog</button> */}
                    </div>  

                ))
            }

        </div>
    );
}
 
export default Bloglists
