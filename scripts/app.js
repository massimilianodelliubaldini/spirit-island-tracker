function updateById(id, fn) {
	var e = document.getElementById(id);
	e.innerHTML = fn(parseInt(e.innerHTML));
}

function updateByClass(cn, fn) {
	var es = document.getElementsByClassName(cn);
	for (var e of es) {
		updateById(e.id, fn);
	}
}