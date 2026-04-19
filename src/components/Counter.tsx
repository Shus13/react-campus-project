import { useState } from "react"

const Counter = () => {

    const[count, setCount] = useState(5)

    const increase = () => {
        setCount(prev => prev + 1)
    }

    const decrease = () => {
        setCount(prev => prev - 1)
    }

    // let backgroundColor = ""
    // if(count >= 7){
    //     backgroundColor = "red";
    // } else if(count <= 3){
    //     backgroundColor = "green"
    // }
    // else {
    //     backgroundColor = "white"
    // }

    const backgroundColor = count >= 7 ? "red" : count <= 3 ? "green" : "white"

  return (
    <div style={{backgroundColor: backgroundColor, padding: "20px", textAlign: "center"}}>
        <h1 style={{color:"black"}}>{count}</h1>
        {count < 10 && <button onClick={increase}>+</button>}
        {count > 0 && <button onClick={decrease}>-</button>}
    </div>
  )
}

export default Counter