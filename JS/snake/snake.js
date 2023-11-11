// [Snake]> parent > [Head]


class Snake {
    
    constructor(x,y, dir="up") {

        // snake segments/ elements
        this.children = [];     // [Head, Body, Tail]
        // let segmentsCount = 3;
        this.segmentsCount = 5;

        // push head
        this.children.push(new Head(x, y, "up")); 
        
        // push segments of body
        for (let i = 1; i < this.segmentsCount - 1; i++) {
            this.children.push(new Body(x, y + i, dir));
        }

        // push tail
        this.children.push(new Tail(x, y + this.segmentsCount - 1, dir)); 
    }

    move() {        
        this.children.reverse()

        this.children.forEach( (s,i)=> {
            
            if(i == this.children.length -1) {
                if(s.dir == "up")    {s.y--}
                if(s.dir == "down")  {s.y++}
                if(s.dir == "right") {s.x++}
                if(s.dir == "left")  {s.x--}
                
            } else {
                // if+s where is the neighbor 
                let neighbor = this.children[i + 1];
                
                if (s.x < neighbor.x) {
                    s.dir = "right";
                    s.x++;
                } else if (s.x > neighbor.x) {
                    s.dir = "left";
                    s.x--;
                } else if (s.y < neighbor.y) {
                    s.dir = "down";
                    s.y++;
                } else if (s.y > neighbor.y) {
                    s.dir = "up";
                    s.y--;
                }    

                turnBody(s, i, neighbor)
                
                if (i === 0) {    
                    turnTail(s, neighbor)
                }
            }                        
        } )
        this.children.reverse()
        border()      
    }
    
    
    // when rendering the SNAKE - also render the head
    render() {
        let html = ``
        for (let i = 0; i < this.children.length; i++) {
            html += this.children[i].render();
        }
        
        return html
    }
    
}

function turnBody(s, i, neighbor) {
    // if (s.dir === "up" && neighbor.dir === "right") {
        //     s.dir = "up-right";
    // } else if (s.dir === "left" && neighbor.dir === "down") {
    //     s.dir = "up-right";
    // } else if (s.dir === "up" && neighbor.dir === "left") {
    //     s.dir = "up-left";
    // } else if (s.dir === "right" && neighbor.dir === "down") {
    //     s.dir = "up-left";
    // } else if (s.dir === "down" && neighbor.dir === "right") {
    //     s.dir = "down-right";
    // } else if (s.dir === "left" && neighbor.dir === "up") {
    //     s.dir = "down-right";
    // } else if (s.dir === "down" && neighbor.dir === "left") {
    //     s.dir = "down-left";
    // } else if (s.dir === "right" && neighbor.dir === "up") {
    //     s.dir = "down-left";
    // }
    const turnFirstSeg = {
        "up":    { "right": "up-right", "left": "up-left" },
        "right": { "up": "down-left", "down": "up-left" },
        "down":  { "right": "down-right", "left": "down-left" },
        "left":  { "up": "down-right", "down": "up-right" }
    };
    // change segment in the turn after header
    if (turnFirstSeg[s.dir] && turnFirstSeg[s.dir][neighbor.dir]) {
        s.dir = turnFirstSeg[s.dir][neighbor.dir];
    }

    const turnSecondSeg = {
        "up":    { "up-right": "up-right", "up-left": "up-left" },
        "right": { "down-left": "down-left", "up-left": "up-left" },
        "down":  { "down-right": "down-right", "down-left": "down-left" },
        "left":  { "down-right": "down-right", "up-right": "up-right" }
    };    
    // change the next segment in the turn 
    if (i != 0) {
        if (turnSecondSeg[s.dir] && turnSecondSeg[s.dir][neighbor.dir]) {
        s.dir = turnSecondSeg[s.dir][neighbor.dir];
        }
    // if (s.dir === "up" && neighbor.dir === "up-right") {
    //     s.dir = "up-right";
    // } else if (s.dir === "left" && neighbor.dir === "up-right") {
    //     s.dir = "up-right";
    // } else if (s.dir === "up" && neighbor.dir === "up-left") {
    //     s.dir = "up-left";
    // } else if (s.dir === "right" && neighbor.dir === "up-left") {
    //     s.dir = "up-left";
    // } else if (s.dir === "down" && neighbor.dir === "down-right") {
    //     s.dir = "down-right";
    // } else if (s.dir === "left" && neighbor.dir === "down-right") {
    //     s.dir = "down-right";
    // } else if (s.dir === "down" && neighbor.dir === "down-left") {
    //     s.dir = "down-left";
    // } else if (s.dir === "right" && neighbor.dir === "down-left") {
    //     s.dir = "down-left";
    // }
    }
}

// function for turn tail
function turnTail(s, neighbor) {
    const tailTurn = {
        "up":    { "up-right": "right", "up-left": "left" },
        "right": { "down-left": "up", "up-left": "down" },
        "down":  { "down-right": "right", "down-left": "left" },
        "left":  { "down-right": "up", "up-right": "down" }
    };

    if (tailTurn[s.dir] && tailTurn[s.dir][neighbor.dir]) {
        s.dir = tailTurn[s.dir][neighbor.dir];
    }
    // if (s.dir === "up" && neighbor.dir === "up-right") {
    //     s.dir = "right";
    // } else if (s.dir === "left" && neighbor.dir === "up-right") {
    //     s.dir = "down";
    // } else if (s.dir === "up" && neighbor.dir === "up-left") {
    //     s.dir = "left";
    // } else if (s.dir === "right" && neighbor.dir === "up-left") {
    //     s.dir = "down";
    // } else if (s.dir === "down" && neighbor.dir === "down-right") {
    //     s.dir = "right";
    // } else if (s.dir === "left" && neighbor.dir === "down-right") {
    //     s.dir = "up";
    // } else if (s.dir === "down" && neighbor.dir === "down-left") {
    //     s.dir = "left";
    // } else if (s.dir === "right" && neighbor.dir === "down-left") {
    //     s.dir = "up";
    // }
}

 function border() {
    if (snake.children[0].dir === "up" && snake.children[0].y === 0) {
    snake.children[0].dir = snake.children[0].x <= 4 ? "right" : "left";
} else if (snake.children[0].dir === "left" && snake.children[0].x === 0) {
    snake.children[0].dir = snake.children[0].y <= 4 ? "down" : "up";
} else if (snake.children[0].dir === "right" && snake.children[0].x === 9) {
    snake.children[0].dir = snake.children[0].y <= 4 ? "down" : "up";
} else if (snake.children[0].dir === "down" && snake.children[0].y === 9) {
    snake.children[0].dir = snake.children[0].x <= 4 ? "right" : "left";
}
    // long version of function

    // if (snake.children[0].y === 0 && snake.children[0].dir === "up") {
    //     if (snake.children[0].x >= 0 && snake.children[0].x <= 4) {
    //         snake.children[0].dir = "right";
    //     } else if (snake.children[0].x >= 5 && snake.children[0].x <= 9) {
    //         snake.children[0].dir = "left";
    //     }
    // }
    // else if (snake.children[0].x === 0 && snake.children[0].dir === "left") {
    //     if (snake.children[0].y >= 0 && snake.children[0].y <= 4) {
    //         snake.children[0].dir = "down";
    //     } else if (snake.children[0].y >= 5 && snake.children[0].y <= 9) {
    //         snake.children[0].dir = "up";
    //     }
    // }
    // else if (snake.children[0].x === 9 && snake.children[0].dir === "right") {
    //     if (snake.children[0].y >= 0 && snake.children[0].y <= 4) {
    //         snake.children[0].dir = "down";
    //     } else if (snake.children[0].y >= 5 && snake.children[0].y <= 9) {
    //         snake.children[0].dir = "up";
    //     }
    // }
    // else if (snake.children[0].y === 9 && snake.children[0].dir === "down") {
    //     if (snake.children[0].x >= 0 && snake.children[0].x <= 4) {
    //         snake.children[0].dir = "right";
    //     } else if (snake.children[0].x >= 5 && snake.children[0].x <= 9) {
    //         snake.children[0].dir = "left";
    //     }
    // }
}

/*
function turnHead(s, neighbor) {
   
    if (s.dir === "up" && neighbor.dir === "right") {
            s.dir = "up-right";
    } else if (s.dir === "left" && neighbor.dir === "down") {
        s.dir = "up-right";
    } else if (s.dir === "up" && neighbor.dir === "left") {
        s.dir = "up-left";
    } else if (s.dir === "right" && neighbor.dir === "down") {
        s.dir = "up-left";
    } else if (s.dir === "down" && neighbor.dir === "right") {
        s.dir = "down-right";
    } else if (s.dir === "left" && neighbor.dir === "up") {
        s.dir = "down-right";
    } else if (s.dir === "down" && neighbor.dir === "left") {
        s.dir = "down-left";
    } else if (s.dir === "right" && neighbor.dir === "up") {
        s.dir = "down-left";
    }
}
*/

// snake -> unidirectional -> head 

/*

*Composition

- An Object (parent) references object of other classes (children)
- an "has a" relationship
- unidirectional/ bidirectional
- one-to-one, many-to-one, ...
*/