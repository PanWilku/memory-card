import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Gameboard from './components/Gameboard'

function App() {
  const [score, setScore] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(0)

  return (
    <>
    <div className='flex flex-col w-full h-screen bg-amber-100'>
      <Menu score={score} bestScore={bestScore}/>
      <Gameboard/>
    </div>
    </>
  )
}

export default App
