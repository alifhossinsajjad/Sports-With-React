import { useState } from "react"

export default function Counter () {

     const [count = 0 , setCount] = useState (0);

      const handleAdd = () =>{
        // console.log('add button clicked');
        const newCount = count + 1;
        setCount(newCount);
      }
    return(
        <div style={{
           color:"red",
            border:"4px solid red",
            marginBottom: "18px",
            padding:"20px"
        }}>
            <h3>Count : {count}</h3>
            <button onClick={() => {handleAdd()}}>Add</button>
        </div>
    )
}