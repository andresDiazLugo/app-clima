import React from 'react';
import Style from './Nav.module.css'
import Search from '../Search/Search';
import {Link} from 'react-router-dom'



export default function Navegacion() {
  return(
    <header className={Style.container}>
        <nav className={Style.nav}>
           <Link style={{textDecoration: "none"}} to="/"> <div className={Style.logo}><h1>App Clima</h1></div></Link>
            <div><Search/></div>
            <div className={Style.about}><Link  style={{textDecoration: "none", color: "white"}} to="/about"><h2 className={Style.about}>about</h2> </Link></div>
        </nav>
    </header>
  )
  
}
