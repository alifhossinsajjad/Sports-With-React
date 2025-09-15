
import './App.css'
import Counter from './Counter';
import Batsman from './Sports';

function App() {

  function handleClick (){
    alert('I am click')
  }

  const handlePress  = () => {
    alert("I am press");
  }

  const handleAdd = (num) => {
    const addNUmber = num + 1; 
    alert(addNUmber)
  }

  return (
    <>

  
      <h1>Vite + React</h1>

    <Batsman/>
      

     <Counter/>




      <button onClick={handleClick}>Click me</button>
      <button onClick={handlePress}>Press me</button>
      <button onClick={() => alert("i am press 2")}>Press me2</button>

      <button onClick={() => {handleAdd(1)}}>ADD me</button>
      
    </>
  )
}

export default App
