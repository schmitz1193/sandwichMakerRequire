//var Sandwich = (function(argument){
define(["jquery", "sandwich"], function($, sandwich) {

//Private Space
	var condiment = {
  		mayo: 0.25,
		mustard: 0.25,
		aiolo: 0.50,
		none: 0
	};

	return {

// Public space

//Set up a method to determine which cheese was selected and the price
	addCondiment: function() {
		condimentChoice = $("#condiment input:checked");
		if (condimentPrice === "") {
			return;
		}
		for (var i = 0; i < condimentChoice.length; i++) {
//Invoke addItem method to add selected condiment to the order array
			sandwich.addItem(condimentChoice[i].value);
			var condimentPrice = condiment[condimentChoice[i].value];
//Invoke addPrice method to increment price.  
			sandwich.addPrice(condimentPrice);
		}
	}

};

});



