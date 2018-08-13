const playGame = (board, i) => {
    let round ={
        board: board,
        score: 0
    }  

    if (board.getChainfromID(i).size > 1) {
        let value = board.getValueOfId(i);
        round.score = value * board.getChainfromID(i).size;
    }
    board.destroyChainfromID(i)
    return round
}

export default playGame