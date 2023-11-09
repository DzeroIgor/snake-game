// const UP = 0
// const RIGHT = 1
// const DOWN = 2
// const LEFT = 3

// const dirToDelta = (dir) => {
//     const deltas = [
//         {x: 0, y: -1},  // UP     0
//         {x: 1, y: 0},   // RIGHT  1
//         {x: 0, y: 1},   // DOWN   2
//         {x: -1, y: 0},  // LEFT   3
//     ]
//     return deltas[dir]
// }

// let vDir = dirToDelta(RIGHT)

// let coord = {x: 0, y: 0}

// coord.x += vDir.x
// coord.y += vDir.y


const UP = 0
const RIGHT = 1
const DOWN = 2
const LEFT = 3

const X = 0
const Y = 1

const dirToDelta = (direction) => ([
    //    x   y
    [ 0, -1],  // UP     0
    [ 1,  0],   // RIGHT  1
    [ 0,  1],   // DOWN   2
    [-1,  0],  // LEFT   3
    ]) [direction]


const move = (coord, dir) => {
    coord[X] += dir[X] 
    coord[Y] += dir[Y]  
}

let coord = [0, 0]
move(coord, dirToDelta(RIGHT))