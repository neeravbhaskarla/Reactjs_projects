import React from 'react'
const Useroutput=(props)=>{
    const style = {
        border:"2px solid #ccc",
        borderRadius:"5px",
        margin:"3px",
        padding:"10px"
    }
    const style1 ={
        fontFamily:"Dancing Script",
        margin:"2px",
        padding:"4px",
        textAlign:"right",
        fontSize:"20px"
    }
    const fstyle = {
        fontSize:"12px",
        fontFamily:"Roboto"
    }
    return(
        <p style={style}><br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Enim sit amet venenatis urna cursus. Facilisis volutpat est velit egestas dui id ornare arcu. Venenatis lectus magna fringilla 
            urna porttitor rhoncus dolor purus non. Ullamcorper morbi tincidunt ornare massa. Condimentum id venenatis a condimentum. 
            Ultrices tincidunt arcu non sodales neque. Tristique senectus et netus et malesuada fames ac. Eget nulla facilisi etiam dignissim diam quis.
            sit amet volutpat consequat mauris. Eget dolor morbi non arcu. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. 
            Diam volutpat commodo sed egestas egestas fringilla. Gravida neque convallis a cras semper auctor neque.
            <br/>
            Sit amet consectetur adipiscing elit pellentesque habitant morbi. Tortor aliquam nulla facilisi cras. 
            Ac felis donec et odio pellentesque diam volutpat commodo. Amet nisl suscipit adipiscing bibendum est ultricies. 
            Purus in mollis nunc sed id. Massa massa ultricies mi quis hendrerit dolor. Ultrices gravida dictum fusce ut placerat orci nulla.
            Nulla aliquet porttitor lacus luctus accumsan. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. 
            Turpis egestas pretium aenean pharetra magna ac. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent.
            Nec sagittis aliquam malesuada bibendum. In dictum non consectetur a erat nam at lectus urna. Id nibh tortor id aliquet lectus proin.
            Dolor sit amet consectetur adipiscing elit duis. Arcu dictum varius duis at consectetur lorem. 
            Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. Augue neque gravida in fermentum et sollicitudin ac. 
            Leo vel orci porta non. Diam sit amet nisl suscipit adipiscing bibendum.
    <footer style={style1}><p style={fstyle}>Written by</p>{props.name}</footer>
        </p>
    );
}
export default Useroutput;