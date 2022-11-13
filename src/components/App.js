import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
//code here 
  const [btn1,setBtn1] = useState('OFF')
  const [btn2,setBtn2] = useState('ON')
   const handleClick = (() => {
    setBtn1(btn2);
    setBtn2(btn1)
   })
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {btn1}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {btn2}
      </button>
    </div>
  );
}


export default App;
