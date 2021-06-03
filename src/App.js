import React, {useState} from 'react';
import Result from './components/Result';
import MathOperations from './components/MathOperations';
import Functions from './components/Funcitons';
import Numbers from './components/Numbers'

import './App.css';


const App = () => {
  /****SIN ARRAY DESTRUCTURING
  const arrayFuncionModTexto = useState("");

  const texto = arrayFuncionModTexto[0]//valor inicial que tenemos

  const 0 = arrayFuncionModTexto[1]//funcion que me permite modificar el valor
  ****/

  //CON ARRAY STRUCTURING
  const [stack, set_stack] = useState("");

  return (
    <div className="react-calculator">
      <Result value={stack}/>

      <Numbers
        onClickNumber={number =>{
          console.log(number);
          set_stack(`${stack}${number}`)//funcion devuelta por useState
        }}
      />

      <Functions 
        onContentClear={()=>{
          console.log("Clear")
          set_stack("")
        }}
        onDelete={()=>{
          if(stack.length > 0){
            console.log("<- borrando");
            const newStack = stack.substring(0, stack.length - 1)
            set_stack(newStack)
          }
        }}
      />
      <MathOperations 
        onClickOperation={Operation => {
          if(stack.length > 0){  
            console.log(Operation)
            set_stack(`${stack}${Operation}`)
          }
        }}
        onClickEqual={Equal => {
          if(stack.length > 0){
            console.log(Equal)
            set_stack(`${stack}${Equal}`)
            // eslint-disable-next-line
            let resultado = eval(stack);
            set_stack(resultado.toString())
          }  
        }}
      />
    </div>
  );
}

export default App;
