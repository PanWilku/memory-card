import { useEffect, useRef, useState } from 'react'
import './App.css'
import Menu from './components/Menu'
import Gameboard from './components/Gameboard'
import { handleReset } from './helpers/handleReset'

function App() {
  const apiKey = import.meta.env.VITE_APP_CAT_API_KEY
  const [score, setScore] = useState<number>(0)
  const [bestScore, setBestScore] = useState<number>(0)
  const hasFetched = useRef<boolean>(false)
  const [clickedImg, setClickedImg] = useState<string[]>([])

  type ImageInfo = {
    id: string;
    url: string;
}

  const [imgArr, setImgArr] = useState<ImageInfo[] | null>(null)


  useEffect(() => {
    if(hasFetched.current) return;
    hasFetched.current = true;
    fetch("https://api.thecatapi.com/v1/images/search?limit=16", {headers: {"x-api-key": apiKey}})
    .then((response) => response.json())
    .then((response) => {
      const data = response.map((item: any) => ({
        id: item.id,
        url: item.url
      }))
      setImgArr(data);

    })
    .catch((error) => {
      console.log("Error fetching data: ", {error})
    })
  }, [])


  return (
    <>
      <div className='flex flex-col h-screen w-full bg-amber-100'>
        <Menu score={score} bestScore={bestScore} setScore={setScore} setClickedImg={setClickedImg}/>
        <Gameboard imgArr={imgArr} setImgArr={setImgArr} clickedImg={clickedImg} setClickedImg={setClickedImg}
        setBestScore={setBestScore} setScore={setScore} score={score} bestScore={bestScore}/>
      </div>
    </>
  )
}

export default App
