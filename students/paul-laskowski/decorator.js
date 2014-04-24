
function countDecorator(fn) {
	var counter = counter || 0;

	function forward() {
		counter++;
		return fn.apply (this,arguments);
	}
	
	forward.callCount = function() {
		return counter;
	}
	return forward;
}

