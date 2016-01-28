var led = document.getElementById('led'),
	els = led.childNodes,
	uid = 0,
	size = 15,
	w = 0,
	h = 0,
	row = 0,
	col = 0,
	arr_lights = [];

var hh = document.getElementById('time-hh'),
	hx = document.getElementById('time-h'),
	mm = document.getElementById('time-mm'),
	mx = document.getElementById('time-m'),
	ss = document.getElementById('time-ss'),
	sx = document.getElementById('time-s');

for (var k = 0, len = els.length; k < len; k++) {
	if (els[k].nodeType != 1)
		continue;
	w = parseInt(els[k].clientWidth);
	h = parseInt(els[k].clientHeight);
	row = parseInt(h / size);
	col = parseInt(w / size);

	var t, l, sum = 0;
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++) {
			uid++;
			t = size * i;
			l = size * j;
			arr_lights.push('<div uid="' + uid + '" id="l-' + uid + '" class="light row-' + i + ' col-' + j + '" style="top:' + t + 'px;left:' + l + 'px"></div>');
		}
	}
	els[k].innerHTML = arr_lights.join("");
	arr_lights = [];
}

setInterval(function() {
	var now = new Date(),
		time_hh = parseInt(now.getHours()),
		time_mm = parseInt(now.getMinutes()),
		time_ss = parseInt(now.getSeconds());
	hh.className = "block-digital num-" + parseInt(time_hh / 10);
	hx.className = "block-digital num-" + parseInt(time_hh % 10);
	mm.className = "block-digital num-" + parseInt(time_mm / 10);
	mx.className = "block-digital num-" + parseInt(time_mm % 10);
	ss.className = "block-digital num-" + parseInt(time_ss / 10);
	sx.className = "block-digital num-" + parseInt(time_ss % 10);

}, 1000);