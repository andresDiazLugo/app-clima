import './style/App.css'
import Nav from './components/Nav/Nav'
import Store from './store/storeComponents/Store'
import Card from './components/Card/Card'
import {Routes,Route} from 'react-router-dom'
import About from './components/About/About'
import CardDetail from './components/CardDetail.jsx/CardDetail'
import NotFound from './components/NotFound/NotFound'
import Footer from './components/Footer/Footer'
import  { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <Store>
         <Nav/>
        <Routes>
         <Route path='/' element={<Card/>}/>
         <Route path='/detail/:id' element={<CardDetail/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='*' element={<NotFound/>} />
        </Routes>      
      </Store>
         <Footer/>
         <Toaster
          position="top-right"
          reverseOrder={false}
        />
    </div>
  )
}

export default App
