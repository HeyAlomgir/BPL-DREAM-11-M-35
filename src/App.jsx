
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Player from './Components/Player/Player'
import { ToastContainer } from 'react-toastify'



const playerPromise=fetch("data.json").then(res=>res.json())

function App() {
 

  const [coin,setCoin]=useState(5000);

  return (
    <>
    <Navbar coin={coin} ></Navbar>

    <Banner></Banner> 

    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <Player playerPromise={playerPromise} setCoin={setCoin} coin={coin} ></Player>
    </Suspense>


    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
