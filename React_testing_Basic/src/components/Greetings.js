import React, {useState} from 'react'
import Output from './Output'

const Greetings = ()=>{
    const [showText, changeText] = useState(false)
    return(
        <div>
            {showText?<Output>Hidden Text is visible</Output>:<Output>This is normal text</Output>}
            <h1>Say the greeting</h1>
            {!showText&&<p>Hello World!!</p>}
            <button onClick={()=>changeText(!showText)}>Change</button>
        </div>
    )
}
export default Greetings