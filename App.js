import React, {useState} from 'react';
import './App.css';

function App() {

  const [str,setStr] = useState('Hello Word');
  
  function handleClick(){
    setStr('Imagem para CheckPoint - Devops')
  }



  return (
    <div className="App">
      <h1>{str}</h1>
      <button onClick={()=>handleClick()}>
        Clique Aqui!
      </button>
    </div>
  );
}

export default App;
