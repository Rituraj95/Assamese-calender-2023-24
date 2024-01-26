import React from 'react'

//import Calender1 from './component/Calender1'
import Navbar from './component/Navbar'
import Jeth from './component/Jeth'
import Bohag from './component/Bohag'
import Aahar from './component/Aahar'
import Xaon from './component/Xaon'
import Bhado from './component/Bhado'
import Aahin from './component/Aahin'
import Kati from './component/Kati'
import Aaghun from './component/Aaghun'
import Puh from './component/Puh'
import Magh from './component/Magh'
import Phagun from './component/Phagun'
import Sout from './component/Sout'



import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'




//import './component/Calender.css'



const App = () => {
  return (
    <Router>
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Bohag/>}></Route>
        <Route path='/Jeth' element={<Jeth/>} />
        <Route path='/Bohag' element={<Bohag/>} />
        <Route path='/Aahar' element={<Aahar/>} />
        <Route path='/Xaon' element={<Xaon/>} />
        <Route path='/Bhado' element={<Bhado/>} />
        <Route path='/Aahin' element={<Aahin/>} />
        <Route path='/Aaghun' element={<Aaghun/>} />
        <Route path='/Kati' element={<Kati/>} />
        <Route path='/Puh' element={<Puh/>} />
        <Route path='/Magh' element={<Magh/>} />
        <Route path='/Phagun' element={<Phagun/>} />
        <Route path='/Sout' element={<Sout/>} />








      </Routes>
    </Router>

  )
}

export default App
