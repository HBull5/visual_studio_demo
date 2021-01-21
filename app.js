function foo() {
	if (true) {
		const arr = [1, 3, 5];
		for (const ele of arr) {
			console.log(ele);
		}
	} else {
		console.log('something else');
	}
}

function bar() {
	console.log('whatever');
}
