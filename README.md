#Sandwich Maker - exercise using REQUIRE
- Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:
  1. bread
  1. meat
  1. cheese
  1. condiments
  1. veggies
- This project has one HTML file that has:
  1. a section of options for each sandwich part
  1. the ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
  1. a button with a label of "Make me a sandwich"
  1. an empty DOM element into which the final sandwich order and its cost will be inserted
  1. The ingredient choices are stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": "2.00", "bacon": "1.50"}

- The ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

- Each IIFE exposes, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient(s) selected by the user.

- An additional JavaScript file handles interacting with the form elements and determining which method should be called.

//////////////////////////////////////////////


