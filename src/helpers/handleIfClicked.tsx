type ImageInfo = {
    id: string ;
    url: string;
  };


export default function handleIfClicked(
    clickedImg: string[],
    setClickedImg: React.Dispatch<React.SetStateAction<string[]>>,
    clickedId: string,
    imgArr: ImageInfo[] | null,
    setImgArr: React.Dispatch<React.SetStateAction<ImageInfo[] | null>>,
    setBestScore: React.Dispatch<React.SetStateAction<number>>,
    setScore: React.Dispatch<React.SetStateAction<number>>,
    score: number,
    bestScore: number,
  ) {
    if (clickedImg.includes(clickedId)) {
      console.log("YOU LOST");
      setClickedImg(() => [])
      if(score > bestScore) {
        setBestScore(score);
      }
      setScore(0)
      return;
    }
  
    setClickedImg((prev) => [...prev, clickedId]);
    setScore((prev) => prev + 1)
    console.log("it runs!")
    shuffle(imgArr, setImgArr)
    console.log("SHUFFLE!")
  }


  function shuffle(
    imgArr: ImageInfo[] | null,
    setImgArr: React.Dispatch<React.SetStateAction<ImageInfo[] | null>>
  ) {
    if (!imgArr) return;  // Handle null case
    // Create a shallow copy to avoid mutating the original state
    const shuffled = [...imgArr];
    
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements i and j
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Update state with the shuffled array
    setImgArr(shuffled);
  }

