function Title({name, paragraph, color}){

    
    return (
    <div>
    
    <h1 style={{color:color}}>My first title in React :D and my name is {name ? name : "Carlucho"} </h1>
    {paragraph ?
    <p>Im trying to make an paragraph inside my function Title and with a variable let or cons to try something out </p>
        :
        <p>Hello World</p>}
    </div>)
}

export default Title