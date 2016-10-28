# q-loop
Q extension that loops promises like you would normally do with a 'while'-loop

Install
-------

`npm install --save q q-loop`

Basic usage
-----------

```javascript
/**
 * Loops the func until the condition returns true.
 * @param  {func} condition - a function that returns a boolean, loops untill this condition is met.
 * @param  {func} func - Your Q-function that you want to loop
 * @return {promise} A promise for the completion of the loop
 */
 q.loop(condition, func) {
 	..
 }

var i = 0;
q.loop(
	() => { return i < 5;},
	() => { 
		return q.delay(100)
		.then(() => i++);
	}
);
```
