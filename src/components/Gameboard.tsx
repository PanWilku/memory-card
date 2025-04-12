import MemoryCard from "./MemoryCard"

type ImageInfo = {
    id: string;
    url: string;
  };
  
  type GameboardProps = {
    imgArr: ImageInfo[] | null;
    setImgArr: React.Dispatch<React.SetStateAction<ImageInfo[] | null>>
    clickedImg: string[]
    setClickedImg: React.Dispatch<React.SetStateAction<string[]>>
    setBestScore: React.Dispatch<React.SetStateAction<number>>
    setScore: React.Dispatch<React.SetStateAction<number>>
    score: number
    bestScore: number
  };


function Gameboard({imgArr, clickedImg, setClickedImg, setImgArr, setBestScore, setScore, score, bestScore}: GameboardProps) {
    
    if (!imgArr) return null;
    return(
        <div className="flex w-full h-full bg-amber-100 justify-center">
            <div className="grid min-[1921px]:grid-cols-5 grid-cols-10 gap-4 w-9/10 h-1/2 items-center pt-2">
            {imgArr.map((item) => (
                <MemoryCard setImgArr={setImgArr} setClickedImg={setClickedImg} imgArr={imgArr} image={item.url}
                 id={item.id} key={item.id} clickedImg={clickedImg}
                 setBestScore={setBestScore} setScore={setScore} score={score} bestScore={bestScore}></MemoryCard>
            ))}
            </div>
        </div>
    )
}
export default Gameboard