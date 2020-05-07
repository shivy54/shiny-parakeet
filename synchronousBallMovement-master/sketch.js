var gameState = 0
var playano = 0
var form
var game 
var player 
var database
var allPlayers

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game() ;
game.getState();
game.Start();
}

function draw(){
  if (playano === 4){
    game.update(1)
  }
  if(gameState == 1 ) {
    game.play()
  }

}
