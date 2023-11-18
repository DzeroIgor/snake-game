
let snake = new Snake(2, 4, "up", 4);
let map = new Map();
let apple = new Apple(3, 6);
let mouse = new Mouse(4, 7);
let heart = new Heart(7, 4);
let frog = new Frog(7, 2);
let egg = new Egg(9, 3);
let coin = new Coin(2, 1);


map.children.push(apple);
map.children.push(coin);
map.children.push(egg);
map.children.push(frog);
map.children.push(heart);
map.children.push(mouse);
map.children.push(snake);
map.render(container)

setInterval(()=> {
    snake.move()
    map.render(container)
    
    for (let i = 0; i < map.children.length; i++) {
        let obj = map.children[i];
            if (snake.children[0].x === obj.x && snake.children[0].y === obj.y) {
                map.children.splice(i, 1);
                snake.segmentsCount ++; 
                console.log("segmentsCount:", snake.segmentsCount);
                return snake.segmentsCount
            }
        }

    }, 1000 )

const userAction = (e) => {
    switch(e.code) {
        case "ArrowUp": snake.children[0].dir = "up"; break;
        case "ArrowRight": snake.children[0].dir = "right"; break;
        case "ArrowDown": snake.children[0].dir = "down"; break;
        case "ArrowLeft": snake.children[0].dir = "left"; break;
    }
}


