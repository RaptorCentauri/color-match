const getMaxHeight = Object.defineProperty(Array.prototype, 'getMaxHeight', {
    value() {
        try {
            return this.length;
        } catch (e) {
            throw e
        }
    }
});




let t = [
    ['a'],
    ['a','b'],
    ['a','b', 'c'],
    ['a','b'],
    ['a']
]

let h = t.getMaxHeight()

console.log(h);


export default getMaxHeight
