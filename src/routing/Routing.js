import React from 'react'
import { Home } from '@mui/icons-material'
import Headphones from '../pages/headphones/Headphones'
import SmartAccessories from '../pages/smartAccessories/SmartAccessories'
import SmartPhone from '../pages/smartPhone/SmartPhone'
import MouseAndKeyboard from '../pages/mouseAndKeyboard/MouseAndKeyboard'
import NavBar from '../components/navBar/NavBar'
import Header from '../components/header/Header'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Routing() {
  return (
    

    <BrowserRouter>
    <Header/>
    <NavBar/>
    
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/headphones' element={<Headphones/>}></Route>
            <Route path='/mouseandkeyboards' element={<MouseAndKeyboard/>}></Route>
            <Route path='/smartAccessories' element={<SmartAccessories/>}></Route>
            <Route path='/smartPhone' element={<SmartPhone/>}></Route>
            
            
        </Routes>
    </BrowserRouter>
  )
}

export default Routing