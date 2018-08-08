const levelUp = (score) =>{
    let level = Math.floor((score/100));
    return level+1;
}

export default levelUp