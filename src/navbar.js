import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="navbar-preview">
      
            <h1>Mad-Blogs</h1>
            <div className="nav-links ">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:'white',
                    backgroundColor:'#f1356d',
                    borderRadius:'10px',
                    cursor:'pointer'
                }}>New Blog</Link>
                </div>
    </div>
     );
}
 
export default Navbar;