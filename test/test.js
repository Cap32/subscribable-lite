
const Subscribale = require('../');

describe('Subscribale', function () {
	it('subscribe', function (done) {
		const sub = new Subscribale();
		sub.subscribe((a, b) => {
			expect(a).toBe('a');
			expect(b).toBe('b');
			done();
		});
		sub.publish('a', 'b');
	});

	it('unsubscribe', function () {
		const sub = new Subscribale();
		const handler = jest.fn();
		const unsubscribe = sub.subscribe(handler);
		unsubscribe();
		sub.publish();
		expect(handler.mock.calls.length).toBe(0);
	});

	it('unsubscribe with function', function () {
		const sub = new Subscribale();
		const handler = jest.fn();
		sub.subscribe(handler);
		sub.unsubscribe(handler);
		sub.publish();
		expect(handler.mock.calls.length).toBe(0);
	});

	it('unsubscribe all', function () {
		const sub = new Subscribale();
		const handler = jest.fn();
		sub.subscribe(handler);
		sub.subscribe(handler);
		sub.unsubscribe();
		sub.publish();
		expect(handler.mock.calls.length).toBe(0);
	});

	it('should work by calling publish if no subscribers', function () {
		const sub = new Subscribale();
		sub.publish();
	});

	it('should work by calling unsubscribe if no subscribers', function () {
		const sub = new Subscribale();
		sub.unsubscribe(() => {});
	});

});
