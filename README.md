# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @vikt.hrnk/lotide`

**Require it:**

`const _ = require('@vikt.hrnk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(arr1, arr2)`: takes in two arrays for assertion and console.log an appropriate message to the console.
- `assertEqual(actual, expected)`: Asserts if two values are exactly the same and prints out a message 
- `assertObjectsEqual(obj1, obj2)`: takes in two objects and asserts if they are equal, console.log an appropriate message to the console
- `countLetters(sentence)`: takes in a sentence (as a string) and then returns a count of each of the letters in that sentence.
- `countOnly(allItems, itemsToCount)`: takes in an array and an object. It will return an object containing counts of everything that the input object listed
- `eqArrays(arr1, arr2)`: takes in two arrays and returns true or false, based o a perfect match
- `eqObject(obj1, obj2)`: takes in two objects and returns true or false, based on a perfect match
- `findKey(object, callback)`: takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined. 
- `findKeyByValue(object, value)`:takes in an object and a value. Scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined
- `head(array)`: returns the first item in the array
- `letterPositions(sentence)`: takes in a string and returns all the indices (zero-based positions) in the string where each character is found
- `map(array, callback)`: takes in an array and a callback. Returns a new array based on the result of the callback function
- `middle(array)`: takes in an array and return the middle-most element(s) of the given array
- `tail(array)`: returns "tail" of the array: everything except fot the first item
- `takeUntil(array, callback)`: keeps collecting items from a provided array until the callback provided returns a truthy value
- `without(source, itemToRemove)`: returns a subset of a given array, removing unwanted elements
