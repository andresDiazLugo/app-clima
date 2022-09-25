import React from 'react'
import Style from './Loading.module.css'
import {useContext} from 'react'
import contexto from '../../store/storeComponents/contexto'
export default function Loading() {
const {clima} = useContext(contexto);

  return (
    <div className={Style.container}>

    <div className={Style.spinner}>
    <span>B</span>
    <span>U</span>
    <span>S</span>
    <span>C</span>
    <span>A</span>
    <span>R</span>

  </div>
    <div className={Style.spinner}>
    <span>R</span>
    <span>E</span>
    <span>G</span>
    <span>I</span>
    <span>O</span>
    <span>N</span>

    </div>
    </div>
  )
}
