const destroyChainfromID = function(id){
    let chain = this.getChainfromID(id);

    console.log('chain', chain.size);
    
    if (chain.size > 1) {
        chain.forEach(c => {
            this.deleteValueOfId(c)
        })
    }


}

export default destroyChainfromID