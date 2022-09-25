import {useContext} from 'react'
import contexto from '../../store/storeComponents/contexto'
import {useParams} from 'react-router-dom'
import Style from './CardDetail.module.css'
export default function CardDetail() {
  const {clima} = useContext(contexto)
  const {id} = useParams()
  const detalClima = clima.filter(e=> e.id === Number(id))
    return (
    <div className={Style.container}>
        <h2>{detalClima[0].name}</h2>
        <div className={Style.containerHumedad}>
            <h2>Humedad: {detalClima[0].main.humidity}</h2>
            <h2>Presion: {detalClima[0].main.pressure}</h2>
        </div>
        <h2>temperatura maxima: {detalClima[0].main.temp_max} ºC</h2>
        <h2>temperatura minima: {detalClima[0].main.temp_min} ºC</h2>
        <h2>visibilidad: {detalClima[0].visibility}</h2>
        <img src={`http://openweathermap.org/img/wn/${detalClima[0].weather[0].icon}@2x.png`} alt={`tiempo en ${detalClima[0].name}`}/>
    </div>
  )
}
