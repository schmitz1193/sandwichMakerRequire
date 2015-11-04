//var Sandwich = (function(argument){
define(["jquery", "sandwich"], function($, sandwich) {

//Private Space
	var veggie = {
  		lettuce: 0.25,
		tomato: 0.75,
		onions: 0.50,
		peppers: 0.75,
		none: 0
	};

	return {

// Public space

//Set up a method to determine which cheese was selected and the price
	addVeggie: function() {
		veggieChoice = $("#veggie input:checked");
		if (veggiePrice === "") {
			return;
		}
		for (var i = 0; i < veggieChoice.length; i++) {
//Invoke addItem method to add selected veggie to the order array
			sandwich.addItem(veggieChoice[i].value);
			var veggiePrice = veggie[veggieChoice[i].value];
//Invoke addPrice method to increment price.  
			sandwich.addPrice(veggiePrice);
		}
	}

};

});



