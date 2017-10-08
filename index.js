
const _subs = '_subscribable_lite';

const Subscribable = function Subscribable() {};

Subscribable.prototype.subscribe = function subscribe(fn) {
	fn && (this[_subs] = (this[_subs] || []).concat(fn));
	return () => this.unsubscribe(fn);
};

Subscribable.prototype.publish = function publish() {
	(this[_subs] || []).forEach((fn) => fn.apply(this, arguments));
};

Subscribable.prototype.unsubscribe = function unsubscribe(fn) {
	if (fn && this[_subs]) { this[_subs].splice(this[_subs].indexOf(fn), 1); }
	else { this[_subs] = []; }
};

module.exports = Subscribable;
