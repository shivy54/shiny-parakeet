class Game{
constructor(){
}

getState(){
var gameStateref = database.ref ('Gamestate')
gameStateref.on("value",function(data){
gameState = data.val()

})
}

update(state){
database.ref('/').update({
    Gamestate:state
})
}
Start(){
if(gameState == 0 ){
    player=new Player()
    player.getCount()
    form=new Form()
    form.display()
}
}
play(){
form.hide();
textSize(30);
text("Game Start",100,100)
Player.getInfo()
if(allPlayers !== undefined){
    var displayPos = 130
    for(var plr in allPlayers){
        displayPos += 20
        textSize(15)
        text(allPlayers[plr].name + ": "+ allPlayers[plr].distance,120,displayPos);
    
    }
}

if(keyIsDown(UP_ARROW) && player.index !==null){
player.distance += 20
player.update();
}
}

}
//soundarya63@gmail.com