//var Sandwich = (function(argument){
define(["jquery", "sandwich"], function($, sandwich) {

//Private Space
	var meat = {
  		turkey: 2.00,
		beef: 3.00,
		salami: 1.50,
		bacon: 2.75,
		none: 0
	};

	return {

// Public space

//Set up a method to determine which meat was selected and the price
	addMeat: function() {
		meatChoice = $("#meat input:checked");
		if (meatPrice === "") {
			return;
		}
		for (var i = 0; i < meatChoice.length; i++) {
//Invoke addItem method to add selected meat to the order array
			sandwich.addItem(meatChoice[i].value);
			var meatPrice = meat[meatChoice[i].value];
//Invoke addPrice method to increment price.  
			sandwich.addPrice(meatPrice);
		}
	}

};

});



