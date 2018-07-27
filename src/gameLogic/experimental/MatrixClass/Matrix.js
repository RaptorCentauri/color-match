import convertToSquareBoard from '../../../gameLogic/convertToMatrix.js'

import {
    createMap, 
    deleteValueOfId, 
    destroyChainfromID, 
    display, 
    displayPretty, 
    dropDown, 
    fillEmptyValues, 
    getAllEdges, 
    getChainfromID, 
    getEastEdge, 
    getEastNeighbor, 
    getEquivalentNeighbors, 
    getNeighbors, 
    getNorthEdge, 
    getSouthEdge, 
    getSouthNeighbor,
    getValueOfId, 
    getWestEdge, 
    getWestNeighbor, 
    replaceChainfromID, 
    setValueOfid,
    getNorthNeighbor
} from './methods/index.js'

class Matrix {
    constructor(size){
        this.size = size;
        this.createMap();
        this.getAllEdges();
    }

    setValueOfid = setValueOfid
    getValueOfId = getValueOfId
    fillEmptyValues =fillEmptyValues
    deleteValueOfId = deleteValueOfId
    getNorthEdge = getNorthEdge
    getEastEdge = getEastEdge
    getSouthEdge = getSouthEdge
    getWestEdge = getWestEdge
    getAllEdges = getAllEdges
    getNorthNeighbor = getNorthNeighbor;
    getSouthNeighbor = getSouthNeighbor;
    getEastNeighbor = getEastNeighbor;
    getWestNeighbor = getWestNeighbor;
    getNeighbors = getNeighbors;
    getEquivalentNeighbors = getEquivalentNeighbors;
    destroyChainfromID = destroyChainfromID;
    getChainfromID = getChainfromID;
    replaceChainfromID = replaceChainfromID;
    display = display;
    displayPretty = displayPretty
    dropDown = dropDown
    createMap = createMap;

}

export default Matrix