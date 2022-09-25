import {useReducer, useState} from 'react'
import Contexto  from './contexto';
import {GET_CLIMA, DELETE_CARD,REPETIDOS} from '../types'
import {useFetch} from '../../CoostoHoocks/fetch'
import {reducer} from './reducer'
import toast, {Toaster} from 'react-hot-toast'

// const notify = ()=> toast('Here is your toast')
export default function Store(props) {
    
    const initialState = {
        clima: [],

    }
  const [state, dispatch] = useReducer(reducer, initialState);

  const getClima = (ciudad)=>{
      // const [data] = await useFetch(ciudad)
      const apiKEY = import.meta.env.VITE_APP_API_KEY
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKEY}&units=metric`)
      .then(response => response.json())
      .then(data =>{
        
        if(data.message){
          return toast.error('la busqueda es invalida, ingrese una region valida')
        }
        
          dispatch({
              type:GET_CLIMA,
              payload:data
          })           
  
          

      }

        )
    }
  const deleteEstado = (id)=>{
   dispatch({
    type:DELETE_CARD,
    payload:id
   }) 
  }
  const repetidosClima = ()=>{
    dispatch({
      type:REPETIDOS
    })
  }

  return (
    <>
        <Contexto.Provider value={
            {
                clima: state.clima,
                getClima,
                deleteEstado,
                repetidosClima
            }
        }>
            {props.children}
        </Contexto.Provider>
    </>
  )
}
