
const _subs = '_subscriblable_lite';

const Subscribable = function Subscribable() {};

Object.assign(Subscribable.prototype, {
	subscribe(fn) {
		fn && (this[_subs] = (this[_subs] || []).concat(fn));
		return () => this.unsubscribe(fn);
	},
	publish() {
		(this[_subs] || []).forEach((fn) => fn(...arguments));
	},
	unsubscribe(fn) {
		if (fn) { (this[_subs] || []).splice(this[_subs].indexOf(fn), 1); }
		else { this[_subs] = []; }
	},
});

module.exports = Subscribable;
