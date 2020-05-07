class Form {
constructor (){
 this.title = createElement('h1')
 this.input = createInput("")
 this.button = createButton("Ready")
 this.greeting = createElement('h2')
}
hide(){
this.greeting.hide()
this.button.hide()
this.input.hide()
}

display(){


this.title.html("car racer")
this.title.position(130,0)

this.input.position(130,160)

this.button.position(250,200)



this.button.mousePressed(()=>{

this.input.hide()
this.button.hide()
player.name = this.input.value()
playano+=1
player.update(player.name)
player.updateCount(playano)
this.greeting.html("READY UP " + player.name)
this.greeting.position(130,160)
})



}
}