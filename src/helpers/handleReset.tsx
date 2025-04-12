

export function handleReset(setScore: React.Dispatch<React.SetStateAction<number>>,
    setClickedImg: React.Dispatch<React.SetStateAction<string[]>>, fetchImages: () => void ) {
    console.log("clicked!")
    setScore(0)
    setClickedImg(() => [])
    fetchImages()
    return;
}
