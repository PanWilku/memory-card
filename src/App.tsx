import { useEffect, useRef, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Gameboard from './components/Gameboard'
import fetchImages from './helpers/fetchImages'

function App() {
  const [score, setScore] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(0)
  const [clickedImg, setClickedImg] = useState<string[]>([])

  type ImageInfo = {
    id: string;
    url: string;
}

  const [imgArr, setImgArr] = useState<ImageInfo[] | null>(null)


  useEffect(() => {
    fetchImages(setImgArr)
  }, [])


  return (
    <>
      <div className='flex flex-col h-screen w-full bg-amber-100'>
        <Menu score={score} bestScore={bestScore} setScore={setScore} setClickedImg={setClickedImg} fetchImages={fetchImages} setImgArr={setImgArr}/>
        <Gameboard imgArr={imgArr} setImgArr={setImgArr} clickedImg={clickedImg} setClickedImg={setClickedImg}
        setBestScore={setBestScore} setScore={setScore} score={score} bestScore={bestScore}/>
      </div>
    </>
  )
}

export default App
