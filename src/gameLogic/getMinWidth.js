const getMinWidth = Object.defineProperty(Array.prototype, 'getMinWidth', {
    value() {
        try {
            return Math.min(...(this.map(row => row.length)));
        } catch (e) {
            throw e
        }
    }
});

export default getMinWidth
