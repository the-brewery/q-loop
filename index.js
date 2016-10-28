module.exports = function(q) {

	/**
	 * Loops the func until the condition returns true.
	 * @param  {func} condition - a function that returns a booleanß
	 * @param  {func} func - Your Q-function that you want to loop
	 * @return {promise} A promise for the completion of the loop
	 */
	q.loop = function(condition, func) {
		var deferred = q.defer();

		function loop() {
			if (!condition()) return deferred.resolve();
			
			return q.try(() => {
				return func()
				.then(() => loop());
			})
			.catch(error => {
				deferred.reject(error);
			});
		}

		q.nextTick(loop);
		return deferred.promise;
	};

};