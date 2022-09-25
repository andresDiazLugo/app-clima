import {useContext} from 'react'
import contexto from '../../store/storeComponents/contexto'
import Style from './Card.module.css'
import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading'
export default function Card() {
    const {clima, deleteEstado} = useContext(contexto);
  return (
    <main className={Style.main}>
        <ul>
        {clima.length === 0 ?<Loading/>:
          clima.map(clima=>(
            <li key={clima.id} className={Style.li}>
                <button onClick={()=> deleteEstado(clima.id)} className={Style.btn}>X</button>
            <Link style={{textDecoration: "none", color:"white"}} to={`/detail/${clima.id}`}>
              <div className={Style.containerCard}>
                <h2>{clima.name}</h2>
                <img src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} alt={`tiempo en ${clima.name}`}/>
              </div>
               <div className={Style.containerMaxMin}>
                <h3> Min : { Math.ceil(clima.main.temp_min)} ºC</h3>
                <h3>Max : { Math.ceil(clima.main.temp_max)} ºC</h3>
               </div>
            </Link>
            </li>                 
            ))
        }
      
        </ul>
       
    </main>
  )
}
