
let snake = new Snake(2, 4, "up");
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
    const objectsToCheck = [apple, mouse, heart, frog, egg, coin];

    for (const obj of objectsToCheck) {
    if (snake.children[0].x === obj.x && snake.children[0].y === obj.y) {
        const objToRemove = map.children.indexOf(obj);
        if (objToRemove !== -1) {
        map.children.splice(objToRemove, 1);
        }
    }
    }
    // if (snake.children[0].x == apple.x && snake.children[0].y == apple.y) {
    //     const appleToRemove = map.children.indexOf(apple);
    //     if (appleToRemove !== -1) {
    //         map.children.splice(appleToRemove, 1);
    //     }
    // }
    // if (snake.children[0].x == mouse.x && snake.children[0].y == mouse.y) {
    //     const mouseToRemove = map.children.indexOf(mouse);
    //     if (mouseToRemove !== -1) {
    //         map.children.splice(mouseToRemove, 1);
    //     }
    // }
    // if (snake.children[0].x == heart.x && snake.children[0].y == heart.y) {
    //     const heartToRemove = map.children.indexOf(heart);
    //     if (heartToRemove !== -1) {
    //         map.children.splice(heartToRemove, 1);
    //     }
    // }
    // if (snake.children[0].x == frog.x && snake.children[0].y == frog.y) {
    //     const frogToRemove = map.children.indexOf(frog);
    //     if (frogToRemove !== -1) {
    //         map.children.splice(frogToRemove, 1);
    //     }
    // }
    // if (snake.children[0].x == egg.x && snake.children[0].y == egg.y) {
    //     const eggToRemove = map.children.indexOf(egg);
    //     if (eggToRemove !== -1) {
    //         map.children.splice(eggToRemove, 1);
    //     }
    // }
    // if (snake.children[0].x == coin.x && snake.children[0].y == coin.y) {
    //     const coinToRemove = map.children.indexOf(coin);
    //     if (coinToRemove !== -1) {
    //         map.children.splice(coinToRemove, 1);
    //     }
    // }
}, 1000 )

const userAction = (e) => {
    switch(e.code) {
        case "ArrowUp": snake.children[0].dir = "up"; break;
        case "ArrowRight": snake.children[0].dir = "right"; break;
        case "ArrowDown": snake.children[0].dir = "down"; break;
        case "ArrowLeft": snake.children[0].dir = "left"; break;
    }
}


