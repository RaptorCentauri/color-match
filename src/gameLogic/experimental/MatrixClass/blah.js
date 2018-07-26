let shift = () => {
    let n= new Map();

    n.set(13, 10);
    n.set(9, null);
    n.set(5, 3);
    n.set(1, null);








}




drop = () => {
    let rowSize = Math.sqrt(this.size);
    this.southEdge.forEach(e =>{
        console.log('+++++++++++++++++++++++++++++++++++++');
        let dropMap = new Map();

        let pos = e;
        
        do {
           dropMap.set(pos, this.getValueOfId(pos))
           pos = pos-rowSize;
        } while (pos-rowSize > -(rowSize));

        let dropSet = new Set();

        //check if Map has null values
        for (const [key, value] of dropMap) {
           if(this.getValueOfId(key) === null){
                dropSet.add(key)
           }
        }

        
        if (dropSet.size > 0) {
            let q = e;
            do {
                if (dropMap.get(e)=== null) {
                    let x = e
                    do {
                        console.log('************************');

                        console.log('currentX', x);
                        
                        console.log(dropMap);
                        

                        // if (dropMap.get(x)=== null) {
                            let bottom = dropMap.get(x);

                            console.log('bottom', bottom);
                            
                            let top = dropMap.get(x-rowSize);
                            console.log('top', top);
                            

                            dropMap.set(x, top)
                            console.log('newBottom', dropMap.get(x));
                            
                            dropMap.set(x-rowSize, bottom)
                            console.log('newTop', dropMap.get(x-rowSize));
                            
                        // }


                        x=x-rowSize;
                    } while (x-rowSize > 0);
                }
                q=q-rowSize;
            } while (q-rowSize > 0);




    
           console.log('###########################################');
               
            console.log(dropMap);

            }
     
            
        })
    
      
    
    }
