const getMaxWidth = Object.defineProperty(Array.prototype, 'getMaxWidth', {
    value() {
        try {
            return Math.max(...(this.map(row => row.length)));
        } catch (e) {
            throw e
        }
    }
});

export default getMaxWidth
