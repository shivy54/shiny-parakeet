class Player {
constructor(){
this.index = null 
this.distance = 0
this.name = null
}

getCount(){
var playerNo = database.ref('playercount')
playerNo.on("value",(data)=>{
playano = data.val();
})
}

update(){
var playerIndex = "players/player" + playano
database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance

})
}

updateCount(Count){
database.ref('/').update ({
    playercount:Count
})
}

static getInfo(){
var playerInfo = database.ref('Players')
playerInfo.on("value",(data)=>{
    allPlayers = data.val();
})
}


}
