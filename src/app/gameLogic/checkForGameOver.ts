const checkForGameOver = (board, i=1) =>{
    do {
        if (board.hasEquivalentNeighbors(i)){
            return false
        }
        i++ 
    } while (i<=board.size);

    return true;
}

export default checkForGameOver;