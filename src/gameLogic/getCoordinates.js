getCoordinates = (row, col) => {
    console.log(`row: ${row}, col: ${col}`);

    this.getValue(this.state.nums, row, col);
    this.deleteItem(this.state.nums, row, col);
    console.log(this.state.nums);
    this.setState({ num: this.setState.nums })


}