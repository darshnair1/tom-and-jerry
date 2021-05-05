var backImg;
var cat, mouse, catStart, mouseStart, catMove, mouseMove, catEnd, mouseEnd;

function preload() {
    //load the images here
    backImg = loadImage("images/garden.png");
    catStart = loadImage("images/cat1.png");
    mouseStart = loadImage("images/mouse1.png");
    catMove = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseMove = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catEnd = loadImage("images/cat4.png");
    mouseEnd = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(800, 600, 20, 20);
    cat.addAnimation("catSleep", catStart);
    cat.scale = 0.2;
    mouse = createSprite(200, 600, 20, 20);
    mouse.addAnimation("mouseCheese", mouseStart);
    mouse.scale = 0.2;
}

function draw() {

    background(backImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width) / 2) {
        cat.velocityX = 0;
        cat.addAnimation("catHappy", catEnd);
        cat.changeAnimation("catHappy", catEnd);
        mouse.addAnimation("mouseGlass", mouseEnd);
        mouse.changeAnimation("mouseGlass", mouseEnd);
        cat.x += 200;
    }
    drawSprites();
}


function keyPressed(){
    // For moving and changing animation write code here
    if(keyCode === LEFT_ARROW) {
        mouse.addAnimation("mouseTaunt", mouseMove);
        mouse.changeAnimation("mouseTaunt", mouseMove);
        cat.addAnimation("catMove", catMove);
        cat.changeAnimation("catMove", catMove);
        cat.velocityX = -5;
    }

}
