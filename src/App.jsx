
import './App.css'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import { Route, Routes } from 'react-router-dom'
import AddNewStudent from './components/Add-New-Student'
import Uniform from './components/Uniform'
import RulReg from './components/Rul&Reg'
import EditDetails from './components/EditDetails'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/add-new-student' element={<AddNewStudent />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/uniform' element={<Uniform />}/>
        <Route path='/rul&reg' element={<RulReg/>}/>
        <Route path='/edit-details/:id' element={<EditDetails/>}/>
      </Routes>
    </>
  )
}

export default App
