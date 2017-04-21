var graduationDate = new Date("June 1, 2019 12:00:00").getTime();
	var x = setInterval(function() {
		var now = new Date().getTime();
		console.log(now)
		var timeLeft = graduationDate - now;

		var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
		+ minutes + "m " + seconds + "s ";

		if (timeLeft < 0) {
		clearInterval(x);
		document.getElementById("countDown").innerHTML = "Graduated! Hurray.";
		}
	}, 1000);


(function blah() {

alert("Hello , thanks for showing up. "+);

})()