//var Sandwich = (function(argument){
define(["jquery", "sandwich"], function($, sandwich) {

//Private Space
	var cheese = {
  		cheddar: 1.00,
		swiss: 1.25,
		provolone: 1.50,
		none: 0
	};

	return {

// Public space

//Set up a method to determine which cheese was selected and the price
	addCheese: function() {
		cheeseChoice = $("#cheese input:checked");
		if (cheesePrice === "") {
			return;
		}
		for (var i = 0; i < cheeseChoice.length; i++) {
//Invoke addItem method to add selected cheese to the order array
			sandwich.addItem(cheeseChoice[i].value);
			var cheesePrice = cheese[cheeseChoice[i].value];
//Invoke addPrice method to increment price.  
			sandwich.addPrice(cheesePrice);
		}
	}

};

});



