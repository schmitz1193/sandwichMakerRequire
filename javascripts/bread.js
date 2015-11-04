define(["jquery", "sandwich"], function($, sandwich) {
//you have a dependency because you are using jquery
//var Sandwich = (function(argument){

//Private Space
	var bread = {
  		white: 1.00,
		wheat: 1.50,
		rye: 1.50,
		sourdough: 2.00,
		none: 0
	};


	return {
// Public space

//Set up a method to determine which bread was selected and the price
	addBread: function() {

//////////////////////////////////////////////////////
//check for no selection or require a selection???

//Invoke addItem method to add selected bread to the order array
	sandwich.addItem($("#bread").val());

//Invoke addPrice method to increment price.  
//code in () is the equivalent of ex. bread.white 
	sandwich.addPrice(bread[$("#bread").val()]);

	}
};	

});