import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import LeftDiv from './Components/LeftDiv' 
import Tab from './Components/Tab'
import { Route, Routes } from 'react-router-dom'
import Topic1 from './Components/Topic1'
import Topic1_1 from './Components/Topic1.1'

function App() {
 
  return (
    <>
      <Header />
      <div className='container'>
         <LeftDiv />   
         <div  className='rightDiv'>
       <Routes>
            <Route path="/" element={<h1> Welcome to RRD <img src="imageai2.jpg" /> </h1>}>  </Route>
            <Route path="Home" element={<h1> Welcome To  Home Page </h1>} ></Route>
            
            <Route path="Tab1" element={<Tab data="Tab1"/>} >
             <Route path="Topic1" element={<Topic1 data="Topic1"/>} >
                <Route path="Topic1.1" element={<Topic1_1 data="Topic1.1"/>}>
                    <Route path="Topic1.1.1" element={<h1> This is topic1.1.1</h1>}/>
                    <Route path="Topic1.1.2" element={<h1> This is topic1.1.2</h1>}/> 
                </Route>  
                <Route path="Topic1.2" element={<h1> This is topic1.2</h1>}/>
            </Route> 
            <Route path="Topic2" element={<h1> This is topic2</h1>}/>
             </Route>
            
            <Route path="Tab2" element={<h1>Welcome To Tab 2</h1>} ></Route>
            <Route path="Tab3" element={<h1>Welcome To Tab 3</h1>} ></Route>
            <Route path="Tab4" element={<h1>Welcome To Tab 4</h1>} ></Route>
          </Routes>
    </div>
      </div>

    </>
  )
}

export default App
