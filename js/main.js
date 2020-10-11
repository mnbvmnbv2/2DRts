const gameArea = document.getElementById('gameWindow');
const pixelSize = 4;
//starting from left going clockwise
const adjacency = [ { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 } ];
const leavesMoveTime = 100;
