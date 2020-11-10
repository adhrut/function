var fr,mr
var go1, go2, go3, go4






function setup() {
  createCanvas(1200,800);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400, 200, 80, 30);
  fr.shapeColor = "green"
  mr.shapeColor = "green"
  go1 = createSprite(100,100,50,50)
  go2 = createSprite(200,100,50,50)
  go3 = createSprite(300,100,50,50)
  go4 = createSprite(400,100,50,50)
}

function draw() {
  background(0);  
  console.log("mr" + mr.x)
  console.log("fr" + fr.x)
  console.log("mrw" + mr.width/2)
  console.log("frw" + fr.width/2)
  mr.x = World.mouseX
  mr.y = World.mouseY
  if(isTouching(mr,go1)) {
    go1.shapeColor = "red"
    mr.shapeColor = "red"
  }
  else {
    go1.shapeColor = "green"
  mr.shapeColor = "green"
  }
  drawSprites();
}

function isTouching(o1,o2) {
  if(o1.x - o2.x < o1.width/2 + o2.width/2 && o2.x - o1.x < o1.width/2 + o2.width/2  && o1.y - o2.y < o1.height/2 + o2.height/2 && o2.y - o1.y < o1.height/2 + o2.height/2 )  {

    return true
  
    
  }

  else {
    return false

  }
   
  
}