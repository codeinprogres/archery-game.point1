const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   Playerbase = new PlayerBase(300,random(450, height-300), 180, 150);
   player = new Player(285, Playerbase.body.position.y - 153, 50, 180);
   computerBase = new ComputerBase(1500, random(450, height-300), 180, 150);
   computerPlayer = new ComputerPlayer(1485, computerBase.body.position.y - 153, 50, 180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
Playerbase.display2();
computerBase.display();
player.display3();
computerPlayer.display4();


   //display Player and computerplayer


}
