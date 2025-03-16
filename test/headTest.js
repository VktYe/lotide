const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([1]), 5); // Testing if the head of the array [1] is 5
assertEqual(head([]), 5); // 
assertEqual(head([1]), "1"); // 