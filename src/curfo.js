'use strict';

class Curfo {
	constructor (cls, newcls) {
	  this.cls = cls;
	  this.onMode = false;
	  this.prevIndex = -1;
	  this.newCls = (typeof newcls !== 'undefined') ? newcls : "cf-moused";
	  this.init();
	}

	init () {
	  this.items = document.getElementsByClassName(this.cls);
	  this.prevIndex = -1;
	  var that = this;
	  for(var i = 0; i < this.items.length; i++) {
		this.items[i].setAttribute('cf-index', i);

		// CLOSURES (this caps-lock is not out of happiness)
		(function (item) {
			item.addEventListener('mouseover', function () {
			  if(item.getAttribute('cf-index') - that.prevIndex === 1) {
				item.className += " " + that.newCls;
				that.prevIndex++;
				if(that.isFinished() && typeof that.finFunc !== 'undefined') {
				  that.finFunc();
				}
			  }
			});
		})(this.items[i]);
	  }
	}

	isFinished () {
	  return (this.prevIndex === (this.items.length - 1));
	}

	onFinished (func) {
	  this.finFunc = func;
	}
}
