import React,{useState} from 'react';


const Article = (props)=>{
    const [valDefaut]=useState(props.titre)
    console.log(valDefaut)
    return(
        <div>

            {
                valDefaut.map((titre,index)=>{
                    return(
                        <h1 key={index}>{titre.titre}</h1>
                        // <p>yo</p>
                    )
                })
            }
           
           
        </div>
    )
    
}

export default Article


