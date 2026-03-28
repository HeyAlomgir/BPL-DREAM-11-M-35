
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Player from './Components/Player/Player'



const playerPromise=fetch("data.json").then(res=>res.json())

function App() {
 

  return (
    <>
    <Navbar></Navbar>

    <Banner></Banner>

    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Player playerPromise={playerPromise}></Player>
    </Suspense>
    </>
  )
}

export default App
