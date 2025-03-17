import './App.css'
import { useState } from 'react'

function App() {
  //defining state without using useState

  // let number = 0;

  // //example of using useState
  // const names = ['John', 'Doe', 'Jane'];
  // names.forEach(name => {
  //   console.log(name);
  // })

  //define state with useState
  // const returnValue = useState();
  // console.log(returnValue);
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    //updating a state without using useState
    // number += 1;

    //updating a state with useState
    setNumber(number + 1)


    //Log the updated state
    console.log(number);
  }
  return (
    <>
      <button onClick={handleClick}>Current number: {number}</button>
    </>
  )
}

export default App
