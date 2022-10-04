import { useState, useEffect } from "react"
const useFetcher = (url) => {
    const [data, setData] = useState(null);
    const [IsPending, setPending] = useState(true);
    const [error, setErr] = useState(null);

    useEffect(() => {
        // const abortCons=new AbortController()
        // {signal:abortCons.signal}
        setTimeout(() => {

            fetch(url)
                .then(res => {
                console.log('REsponse:',res);
                if(!res.ok)
                {
                    throw Error('couldnt fetch data')
                }
                    return res.json()
                }).then(dt => {
                    console.log('fetched data',dt);
                    setData(dt)
                    setPending(false)
                   
                }).catch((err) => {
                    console.log("Error :",err.message);
            // if(err.name=='AbortError')
            //     {
            //         console.log('fetch aborted')
            //     }
                // else
                // {
                    setErr(err.message)
                    setPending(false)
                // }
                        })
        }, 1000)
                  
                

            // const blogsdata=async()=>
            // {
            //     const response=await fetch(url,{signal:abortCons.signal})
            //     const data=await response.json()
            //     console.log(data)
            //     return data
            // }

        //     blogsdata().then(dt=>{
        //         console.log(dt)
        //         setData(dt)
        //         setPending(false)
        //         setErr(null)
        //     }).catch(err=>{
        //         if(err.name=='AbortError')
        //         {
        //             console.log('fetch aborted')
        //         }
        //         else
        //         {
        //             setErr(err.message)
        //             setPending(false)
        //         }
        //                 })
        // }, 1000)

        // return ()=>abortCons.abort()
    
    }, [url])

    return { data,error,IsPending }
}

export default useFetcher 