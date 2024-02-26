import { useState } from 'react'
import './App.css'
import CreatePrint from './Components/CreatePrint'
import Print from './Components/Print'

function App() {
  const [togglePrinter,setTogglePrinter]=useState(false)
  return (
    <>
    {togglePrinter ? 
     <CreatePrint />
   :
    <Print setTogglePrinter={setTogglePrinter} />
    }
    </>
  )
}

export default App
