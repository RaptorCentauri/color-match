const destroyChainfromID = function(id){
    let chain = this.getChainfromID(id);
    chain.forEach(c => {
        this.deleteValueOfId(c)
    })
}

export default destroyChainfromID