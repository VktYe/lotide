const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([1]), 5); // should faild
assertEqual(head([]), 5); // should faild
assertEqual(head([1]), "1"); // should faild