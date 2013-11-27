
var i = 0;
var daemon = function () {
    setTimeout(daemon, 5000);
}

daemon();