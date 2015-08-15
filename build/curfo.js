'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Curfo = (function () {
	function Curfo(cls, newcls) {
		_classCallCheck(this, Curfo);

		this.cls = cls;
		this.onMode = false;
		this.prevIndex = -1;
		this.newCls = typeof newcls !== 'undefined' ? newcls : "cf-moused";
		this.init();
	}

	_createClass(Curfo, [{
		key: 'init',
		value: function init() {
			this.items = document.getElementsByClassName(this.cls);
			this.prevIndex = -1;
			var that = this;
			for (var i = 0; i < this.items.length; i++) {
				this.items[i].setAttribute('cf-index', i);

				// CLOSURES (this caps-lock is not out of happiness)
				(function (item) {
					item.addEventListener('mouseover', function () {
						if (item.getAttribute('cf-index') - that.prevIndex === 1) {
							item.className += " " + that.newCls;
							that.prevIndex++;
							if (that.isFinished() && typeof that.finFunc !== 'undefined') {
								that.finFunc();
							}
						}
					});
				})(this.items[i]);
			}
		}
	}, {
		key: 'isFinished',
		value: function isFinished() {
			return this.prevIndex === this.items.length - 1;
		}
	}, {
		key: 'onFinished',
		value: function onFinished(func) {
			this.finFunc = func;
		}
	}]);

	return Curfo;
})();