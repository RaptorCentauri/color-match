const getMinHeight = Object.defineProperty(Array.prototype, 'getMinHeight', {
    value() {
        try {
            let row = Math.max(...(this.map(row => row.length)));   //find longest row
            
            let count = 0;

            for (let i = 0; i < this.length; i++) {
                if (this[i].length == row) {
                    count ++;
                }
            }
            return count;
        } catch (e) {
            throw e
        }
    }
});




let t = [
    ['a'],
    ['a','b', 'c', 'd'],
    ['a','b'],
    ['a','b', 'c'],
    ['a','b', 'c', 'd'],
    ['a','b', 'c', 'd'],
    ['a','b'],
    ['a']
]

let h = t.getMinHeight()

console.log(h);


export default getMinHeight
