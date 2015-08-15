# Natto.js (includes Curfo.js if you want it)

Natto.js is a script for handling phonetic alphabets. It defaults to "ICAO" (or "NATO"), but new sets can be added. New sets are treated as if they replace values in the original set if they exist. This means that you do not have to re-create the entire alphabet just to add a new set.

## Basic Usage:

```
var nto = new Natto();
nto.attach(element, 'NATO');

// whenever you want to update the data:
nto.update();

// whenever you want to display the data:
nto.display(container, tagType, className);
```

## Adding a New Set:

```
nto.addSet(setName, setObj);

// Set objects are just key-value pairs with the character to check for as the key
// and the word to replace it with as the value
var newSet = {
	'a' : 'Aardvark',
	'b' : 'Basketball'
}

nto.addSet('test', newSet);
```

## Curfo.js

Curfo is just a small class I created to keep track of mouse-overs in a linear manner. This can make it a lot easier to keep track of where you are when reading off strings of words such as the ones created by Natto.

### Usage:

```
var cf = new Curfo(classNameSurroundingEachWord);
cf.onFinished(functionName);

// After updating the data run this to parse all of the objects and give them
// the proper event listeners
cf.init();
```

## Things I might do sometime soon:

- Make it so you can attach an instance to multiple objects
	- Make it so when you do this, you can set different alphabets for each if you wish
