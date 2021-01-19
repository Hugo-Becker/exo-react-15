import React from 'react'

const Article = (props)=>{
    console.log(props.titre)
    return(
        <div>

            {
                props.titre.map((titre,index)=>{
                    return(
                        <h1 key={index}>{titre.titre}</h1>
                    )
                })
            }
            
           

        </div>
    )
    
}

export default Article


