//Start JQuery

require(["jquery", "bread", "meat", "cheese", "veggie", "condiment", "sandwich"], 
function($, bread, meat, cheese, veggie, condiment, sandwich) {
var blank = "";

//when "make me a sandwich" button is clicked, call the add ingredient JS to collect ingredients and increment prices
//Need to add a check for if they do not make a selection and for when they change their minds and unclick a selection

	$("#create").click(function() {
		if (($("#bread").val()) !== "blank") {
		bread.addBread();
		}
		meat.addMeat();
		cheese.addCheese();
		veggie.addVeggie();
		condiment.addCondiment();

		sandwich.seeCurrent();
		sandwich.getPrice();

//RESET checkboxes and dropdown boxes
		$('input[type=checkbox]').each(function() {
        this.checked = false; 
		}); 

		$('#bread').find('option:first').attr('selected', 'selected');

//		$("#opt").val("blank");
		
	});
//end JQuery
});