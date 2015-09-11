function Bike(name, type, color){
  this.name = name;
  this.type = type;
  this.color = color;
  this.frameColor = color;
  this.bikeType = type;
  this.condition = 'ready to go!';
  this.WHEELS = 2;
}

 Bike.prototype.takeForARide = function(miles){
   var that = this;
   if(miles>50){
     that.condition = 'needs a tune up';
   }
 };

 Bike.prototype.tuneUp = function(){
   this.condition = 'ready to go!';
 }
