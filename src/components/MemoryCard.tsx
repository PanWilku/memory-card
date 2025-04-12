import handleIfClicked from "../helpers/handleIfClicked"

type ImageInfo = {
    id: string;
    url: string;
  };


type MemoryCardProps = {
    imgArr: ImageInfo[] | null;
    setImgArr: React.Dispatch<React.SetStateAction<ImageInfo[] | null>>
    image: string;
    id: string;
    clickedImg: string[];
    setClickedImg: React.Dispatch<React.SetStateAction<string[]>>;
    setBestScore: React.Dispatch<React.SetStateAction<number>>
    setScore: React.Dispatch<React.SetStateAction<number>>
    score: number
    bestScore: number
  };



  function MemoryCard({ image, id, clickedImg, setClickedImg, imgArr, setImgArr, setScore, setBestScore, score, bestScore}: MemoryCardProps) {
    return (
      <img
        onClick={() => handleIfClicked(clickedImg, setClickedImg, id, imgArr, setImgArr, setBestScore, setScore, score, bestScore)}
        src={image}
        className="w-48 min-[1921px]:w-48 object-cover aspect-[2/3] shadow-md rounded-xl
          border-transparent transform delay-100 duration-300 ease-in-out hover:scale-105 hover:border-sky-300 hover:border-10"
      />
    );
  }
export default MemoryCard