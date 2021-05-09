import React,{Fragment, useEffect, useState} from 'react'

const Async = ()=>{
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data= await response.json()
            setPosts(data)
        }
        console.log('Hello There')
        fetchData()
    },[])
    return(
        <Fragment>
            <h1>These are the Posts Fetched from DataBase</h1>
            {/* {posts.map(p=>(
                <div style={{textAlign: 'center', margin: '10px', border: '2px solid #ccc', width:'350px', height:'auto', padding:'30px', display:'inline-block'}}>
                    <h1>{p.userId}</h1>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                </div>
            ))} */}
            <ul>
                {posts.map(p=>(
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </Fragment>
    )
}
export default Async