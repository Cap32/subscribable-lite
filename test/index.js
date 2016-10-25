
const Subscribale = require('../');
const assert = require('assert');

describe('Subscribale', function () {
	it('subscribe', function (done) {
		const sub = new Subscribale();
		sub.subscribe((a, b) => {
			assert(a === 'a');
			assert(b === 'b');
			done();
		});
		sub.publish('a', 'b');
	});

	it('unsubscribe', function (done) {
		const sub = new Subscribale();
		const unsubscribe = sub.subscribe(() => assert(false));
		unsubscribe();
		sub.publish();
		setTimeout(done, 1000);
	});

	it('unsubscribe all', function (done) {
		const sub = new Subscribale();
		sub.subscribe(() => assert(false));
		sub.subscribe(() => assert(false));
		sub.unsubscribe();
		sub.publish();
		setTimeout(done, 1000);
	});
});
