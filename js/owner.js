function Owner(name){
  this.name = name;
  this.bikes = [];
  this.currentbike = ""
}

Owner.prototype.buildBike = function (bike, type, color){
  var bike = new Bike(bike, type, color);
  this.bikes.push(bike);
  };

Owner.prototype.rideBike = function rideBike(bikename, distance){
  var that = this
  this.bikes.forEach(function(bike){
    if(bike.name == bikename){
      that.currentbike = bike;
      };
    });
  if (distance > 50){
    this.currentbike.condition = "needs a tune up";
    };
  };


// Owner.prototype.someInstanceMethod = function(){
//   // code goes here...
// };
