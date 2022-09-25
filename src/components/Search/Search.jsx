import React from 'react';
import Style from './Search.module.css';
import {useContext, useState, useRef} from 'react';
import contexto from '../../store/storeComponents/contexto';


export default function Search() {
    const {getClima, clima} = useContext(contexto);
    const [writeInput, setWriteInput] = useState();
    const inputEl = useRef(null);
    const handleSearch = (e)=>{
        setWriteInput(e.target.value)
    }
// console.log(clima)
    const sendData = (e)=>{      
      for(let repeat of clima){
        if(repeat.name.toUpperCase() === writeInput.toUpperCase()){
            return inputEl.current.value = ""    
        }
      }
        getClima(writeInput)    
  
      inputEl.current.value = ""    
    }

  return (
    <div>
        <input className={Style.input}  ref={inputEl} onChange={handleSearch} type="text" placeholder="    Search "/>
        <button className={Style.btn} onClick={sendData} >Buscar</button>
      
    </div>
  )
}
