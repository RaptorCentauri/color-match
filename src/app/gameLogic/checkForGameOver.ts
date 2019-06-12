const checkForGameOver = (board, i) =>{
    do {
        if (board.hasEquivalentNeighbors(i)){
            return false
        }
        i++ 
    } while (i<=board.size);

    return true;
}

export default checkForGameOver;