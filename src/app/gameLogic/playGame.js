const playGame = (board, i) => {
    let round ={
        board: board,
        score: 0
    }  

    if (board.getChainFromID(i).size > 1) {
        let value = board.getValueOfID(i);
        round.score = value * board.getChainFromID(i).size;
    }
    board.destroyChainFromID(i)
    return round
}

export default playGame