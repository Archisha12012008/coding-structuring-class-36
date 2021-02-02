class Form { 
constructor() { } 
display(){ 
var title = createElement('h2') 
title.html("Car Racing Game"); 
title.position(130, 0); 
var input = createInput("Name"); 
var age = createAge("Age")
var button = createButton("Play"); 
age.position(170,180);
input.position(130, 160); 
button.position(250, 200); 
button.mousePressed(function(){ 
age.hide();
input.hide(); 
button.hide(); 
var name = input.value(); 
playerCount+=1; 
player.update(name) 
player.updateCount(playerCount); 
var greeting = createElement('h3'); 
greeting.html("Hello " + name ) 
greeting.position(130, 160) 
}); 
} 
}