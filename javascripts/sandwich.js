define(["jquery"], function($) {

//Private space
	var price = 0;
	var order = [];

//Public space
	return {

//set up a method to add an ingredient selection to the order
	addItem: function(select) {
		order.push(select);
	},

//set up a method to increment the price as ingredients are added
	addPrice: function(cost) {
		price += cost;
	},

//set up a method to see what is in current order
	seeCurrent: function() {
		console.log("current order ", order);
		beginOrder = "Your current order is: ";
		$("#placeholder-order").html(beginOrder);
		for (var i = 0; i < order.length; i++) {
			if (i === order.length - 1) {
			currentItem = order[i];
			}
			else {
			currentItem = order[i] + ", ";
			}	
			$("#placeholder-order").append(currentItem);
		}
		order = [];
	},

//set up a method to return price of sandwich
	getPrice: function() {
			console.log("price ", price);
			totalBill = "Your total bill is: $";
			$("#final-cost").html(totalBill);
			finalPrice = price.toFixed(2);
			$("#final-cost").append(finalPrice);
			price = 0;
	}
};

});