'use strict';

class NattoUtils {
	def (newVal, deflt) {
		return (typeof newVal === 'undefined') ? deflt : newVal;
	}

	clearContainer (c) {
		while(c.firstChild) {
			c.removeChild(c.firstChild);
		}
	}
}

class Natto {
	constructor () {
		this.converted = [];
		this.inputCache = "";
		this.changed = true;

		this.sets = {
			'ICAO' : { 'a' : 'Alfa', 'b' : 'Bravo', 'c' : 'Charlie', 'd' : 'Delta', 'e' : 'Echo', 'f' : 'Foxtrot', 'g' : 'Golf', 'h' : 'Hotel', 'i' : 'India', 'j' : 'Juliett', 'k' : 'Kilo', 'l' : 'Lima', 'm' : 'Mike', 'n' : 'November', 'o' : 'Oscar', 'p' : 'Papa', 'q' : 'Quebec', 'r' : 'Romeo', 's' : 'Sierra', 't' : 'Tango', 'u' : 'Uniform', 'v' : 'Victor', 'w' : 'Whiskey', 'x' : 'Xray', 'y' : 'Yankee', 'z' : 'Zulu', '0' : 'Zero', '1' : 'One', '2' : 'Two', '3' : 'Three', '4' : 'Four', '5' : 'Five', '6' : 'Six', '7' : 'Seven', '8' : 'Eight', '9' : 'Niner', ' ' : '[space]', ',' : '[commma]', '.' : '[period]', '<' : '[less-than-sign]', '>' : '[greater-than-sign]', '/' : '[forward-slash]', '\\' : '[back-slash]', '\'' : '[apostrophe]', '"' : '[quotation-mark]', ';' : '[semicolon]', ':' : '[colon]', '!' : '[exclamation-point]', '@' : '[at-sign]', '#' : '[octothorp]', '$' : '[dollar-sign]', '%' : '[percent-sign]', '^' : '[caret]', '&' : '[ampersand]', '*' : '[asterisk]', '|' : '[pipe]', '`' : '[grave-accent]', '~' : '[tilde]', '[' : '[left-bracket]', ']' : '[right-bracket]', '{' : '[left-brace]', '}' : '[right-brace]', '(' : '[left-parentheses]', ')' : '[right-parentheses]', '-' : '[dash]', '_' : '[underscore]', '?' : '[question-mark]', '+' : '[plus-sign]', '=' : '[equal-sign]'},
			'NATO' : {},
			'LAPD' : { 'a' : 'Adam', 'b' : 'Boy', 'c' : 'Charles', 'd' : 'David', 'e' : 'Edward', 'f' : 'Frank', 'g' : 'George', 'h' : 'Henry', 'i' : 'Ida', 'j' : 'John', 'k' : 'King', 'l' : 'Lincoln', 'm' : 'Mary', 'n' : 'Nancy', 'o' : 'Ocean', 'p' : 'Paul', 'q' : 'Queen', 'r' : 'Robert', 's' : 'Sam', 't' : 'Tom', 'u' : 'Union', 'v' : 'Victor', 'w' : 'William', 'x' : 'X-ray', 'y' : 'Young', 'z' : 'Zebra' }
		}

		this.nu = new NattoUtils();
	}

	attach (el, type) {
		this.el = el;
		this.type = this.nu.def(type, 'ICAO');
		this.indArr = this.sets[this.type];
	}

	addSet (name, arr) {
		if(typeof this.sets[name] !== 'undefined') {
			console.log(`A set with the name ${name} already exists`);
		} else {
			this.sets[name] = arr;
		}
	}

	update () {
		let str = this.el.value;
		if(str !== this.inputCache) {
			this.inputCache = str;
			this.changed = true;
			this.converted = [];

			for(let i = 0; i < str.length; i++) {
				let ref = this.indArr[str[i].toLowerCase()];

				if(typeof ref !== 'undefined') {
					this.converted.push(ref);
				} else if (typeof this.sets['ICAO'][str[i]] !== 'undefined') {
					this.converted.push(this.sets['ICAO'][str[i]]);
				} else {
					this.converted.push(str[i]);
				}
			}
		} else {
			this.changed = false;
		}
	}

	display (container, tagtype, classname) {
		if(this.changed) {
			this.nu.clearContainer(container);

			for(var i = 0; i < this.converted.length; i++) {
				var el = document.createElement(this.nu.def(tagtype, 'span'));
				el.className = this.nu.def(classname, 'natto-word');
				el.innerHTML = this.converted[i];
				container.appendChild(el);
			}
		}
	}
}
