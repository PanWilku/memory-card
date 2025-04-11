import MemoryCard from "./MemoryCard"

function Gameboard() {
    return(
        <div className="flex w-full h-full bg-rose-500">
            <div className="grid grid-cols-5 gap-4 w-full h-full p-4 bg-rose-500">
            {Array.from({ length: 10 }).map((_, index) => (
                <MemoryCard key={index} />
            ))}
            </div>
        </div>
    )
}
export default Gameboard