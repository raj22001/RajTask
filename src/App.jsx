import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TikTakTao from './components/TikTakTao'
import Theme from './darktheme/Theme'
import DragAndDrop from './dragandDrop/DragAndDrop'
import ApiCalls from './apiTask/ApiCalls'
import LatestResultComponent from './apiTask/LatestResultComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1 className="text-3xl">Hello</h1>
     <TikTakTao/> */}

     {/* <Theme/> */}
     {/* <DragAndDrop /> */}
     {/* <ApiCalls/> */}
     <LatestResultComponent/>
    </>
  )
}

export default App
