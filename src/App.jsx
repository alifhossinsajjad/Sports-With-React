
import { Suspense } from 'react';
import './App.css'
import Counter from './Counter';
import Batsman from './Sports';
import Users from './Users';
import Friends from './Friends';





const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())



const fetchFriendsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}




function App() {

const friendsData = fetchFriendsData();

  function handleClick (){
    alert('I am click')
  }

  const handlePress  = () => {
    alert("I am press");
  }

  const handleAdd = (num) => {
    const addNUmber = num + 0; 
    alert(addNUmber)
  }

  return (
    <>

  
      <h1>Vite + React</h1>

      <Suspense fallback={<h1> Friends coming for treat....</h1>}>
        <Friends friendsData = {friendsData}/>
      </Suspense>


      <Suspense fallback={<h3>Loading ....</h3>}>
        <Users fetchUsers={fetchUsers}/>
      </Suspense>

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
