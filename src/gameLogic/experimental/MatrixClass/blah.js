let toBeDestroyed = new Set();

let alreadyChecked = new Set()

let playChain = (pos) => {
    let targetID = id;
    console.log('running playChain');

    if (alreadyChecked.has(targetValue.id)){
        console.log('giraffe');
    }
    else{
        console.log('ELSE tbd-values: ', toBeDestroyed.values());

        let loopSet = []

        alreadyChecked.add(targetID)
        toBeDestroyed.add(targetID);

        //getNeighbors
        // let targetNeighbors = arr.getNeighbors(pos);
        let targetNeighbors = getEquivalentNeighbors(id)


        for (const [key, value] of targetNeighbors) {
            if(targetNeighbors.get(key) === this.map.get(targetValue)){
                loopSet.push(key)
            }
        }

        loopSet.forEach((item)=>{
            if(!alreadyChecked.has(item)){
                playChain(item)
            }
        })
    }
}