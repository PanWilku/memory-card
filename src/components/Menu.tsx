
type menuProps = {
    score: number,
    bestScore: number
}



function Menu({score, bestScore}: menuProps) {
    return (
        <>
        <div className='flex w-full h-1/8 border-b-2 border-gray-400'>
          <div className='grid grid-cols-1  w-full items-center'>
              <div className='flex flex-col items-end gap-4'>
                <button className='border-2 p-4 w-42 rounded-md bg-linear-to-r from-lime-300 to-green-500'>START</button>
                <button className='border-2 p-4 w-42 rounded-md bg-linear-to-r from-lime-300 to-green-500'>RESTART</button>
              </div>
          </div>
          <div className='grid grid-cols-1 w-full items-center'>
            <div className='flex flex-col gap-4 w-fit items-end'>
              <p className='font-bold p-4'>SCORE: {score}</p>
              <p className=' font-bold p-4'>BEST SCORE: {bestScore}</p>
            </div>
          </div>
        </div>
        </>
    )
}
export default Menu