import { useState } from "react";
import { useHistory } from "react-router-dom";

const NewBlog = () => {
    const [title,setTitle]=useState('')
    // this will show into inp text area & cant be change
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('yoshi')
    const [IsPending,setIspending]=useState(false)
    const hist=useHistory()

    const handleSubmit=(e)=>
    {
        e.preventDefault();
        const blog={title,body,author}
        setIspending(true)
        fetch('  http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added')
            setIspending(false)
            // go back history one step
            // hist.go(-1)

            // redirect to home page. Entering home dir to push command
            hist.push('/')
        })

       

    }
    
    return ( 
        <div className="Create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input
                type="text"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                // it will allow us to change inpt text otherwise just display 'title value
                // when user write anu charater it will triger onChnage event and update setTitle with target input val
                required
                >
                </input>
                <label>Blog Body</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                
                </select>
                {!IsPending&&<button>Add Blog</button>}
                {IsPending&&<button disabled>Adding Blog....</button>}
                <p>Title:{title}</p>
                <p>Body:{body}</p>
                <p>author:{author}</p>
            </form>
        </div>
     );
}
 
export default NewBlog;
