const q = require('q');
require('../index.js')(q);
const expect = require('chai').expect;

describe('Loop tester', () => {

	it('Loop from 1 to 5', done => {
		const start_time = new Date().getTime();

		var i = 0;
		q.loop(
			() => { return i < 5;},
			() => { 
				return q.delay(100)
				.then(() => i++);
			}
		)
		.then(() => {
			const tookms = new Date().getTime() - start_time;
			expect(tookms).to.be.above(500);
			expect(tookms).to.be.below(590);
		})
		.done(done);
	});

});