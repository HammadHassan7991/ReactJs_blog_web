// import { useState, useEffect } from 'react'
import Bloglists from './bloglists';
import useFetcher from './useFetcher';
const Home = () => {
  

    const { data: blogs,error,IsPending } = useFetcher('http://localhost:8000/blogs')
   

    return (
        <div className="home">
            {error&&<div>{error}</div>}
            {IsPending && <div> Loading....</div>}
            {blogs && <Bloglists blogsFM={blogs} title='All Blogs' />}
            

        </div>
    );
}

export default Home;