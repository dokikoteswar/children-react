import React from "react";

const Hello =(props)=>{
   

    return(
        <div> 
            <h2> Welcome  Props child</h2>
          
            {
                props.children
            }

            {/* {
                name=='debu' && <h3>{name}</h3>
            }
            {
                name=='Kotesh' && <h3>{name}</h3>
            }
            {
                name=='Archana' && <h3>{name}</h3>
            } */}
        </div>
    )
}

export default Hello;