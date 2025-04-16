import { useState } from "react";


function Title({color}){
    const[text,setText] = useState("My first title in the beggining of the state")
    const [inputText,setInputText] = useState("");


function clicked(){
    setText(inputText);
}



    return (
    <div>
    
    <h1 style={{color:color}}>{text}</h1>
    <input value={inputText} onChange={(e) =>{setInputText(e.target.value)}}type="text" />
    <button onClick={clicked}>Change</button>
    </div>)
}

export default Title